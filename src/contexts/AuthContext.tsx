import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface User {
  id: string;
  email: string;
  name: string;
  role: 'donor' | 'volunteer' | 'admin';
  profilePicture?: string;
  phone?: string;
  address?: string;
  donations?: number;
  volunteer_hours?: number;
  accessToken?: string;
  subscription?: {
    status: string;
    priceId?: string;
    currentPeriodEnd?: number;
  };
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: RegisterData) => Promise<boolean>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  isAuthenticated: boolean;
  loading: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  name: string;
  role: 'donor' | 'volunteer';
  phone?: string;
  address?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        loadUserData(session.user, session.access_token);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        await loadUserData(session.user, session.access_token);
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setIsAuthenticated(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const loadUserData = async (authUser: any, accessToken: string) => {
    try {
      // Get user profile from user_metadata or create default
      const userData: User = {
        id: authUser.id,
        email: authUser.email,
        name: authUser.user_metadata?.name || authUser.email.split('@')[0],
        role: authUser.user_metadata?.role || 'donor',
        phone: authUser.user_metadata?.phone,
        address: authUser.user_metadata?.address,
        donations: 0,
        volunteer_hours: 0,
        accessToken
      };

      // Try to fetch subscription data
      try {
        const { data: subscription } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (subscription) {
          userData.subscription = {
            status: subscription.subscription_status,
            priceId: subscription.price_id,
            currentPeriodEnd: subscription.current_period_end
          };
        }
      } catch (error) {
        console.log('No subscription data found or error fetching:', error);
      }

      setUser(userData);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) {
        console.error('Login error:', error);
        return false;
      }

      if (data.user && data.session) {
        await loadUserData(data.user, data.session.access_token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          data: {
            name: userData.name,
            role: userData.role,
            phone: userData.phone,
            address: userData.address
          }
        }
      });

      if (error) {
        console.error('Registration error:', error);
        return false;
      }

      if (data.user && data.session) {
        await loadUserData(data.user, data.session.access_token);
        return true;
      }

      return false;
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;

      const { error } = await supabase.auth.updateUser({
        data: {
          name: userData.name || user.name,
          role: userData.role || user.role,
          phone: userData.phone || user.phone,
          address: userData.address || user.address
        }
      });

      if (error) {
        console.error('Profile update error:', error);
        return false;
      }

      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      return true;
    } catch (error) {
      console.error('Profile update failed:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateProfile,
      isAuthenticated,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};