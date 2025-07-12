import React, { useState, useEffect } from 'react';
import { User, Heart, Clock, Award, Download, Edit, Camera, Mail, Phone, MapPin, CreditCard } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [subscription, setSubscription] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dataError, setDataError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
  });

  useEffect(() => {
    if (user) {
      // Only try to load data if we have Supabase configured
      if (import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY) {
        loadUserData();
      } else {
        setLoading(false);
        setDataError('Supabase not configured. Connect to Supabase to view subscription data.');
      }
    }
  }, [user]);

  const loadUserData = async () => {
    if (!user?.accessToken) {
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      // Import Supabase dynamically to avoid errors if not configured
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_ANON_KEY
      );

      // Set auth token for requests
      await supabase.auth.setSession({
        access_token: user.accessToken,
        refresh_token: '',
        expires_in: 3600,
        token_type: 'bearer',
        user: null as any
      });

      // Fetch subscription data with timeout
      const subscriptionPromise = supabase
        .from('stripe_user_subscriptions')
        .select('*')
        .maybeSingle();

      // Fetch orders data with timeout
      const ordersPromise = supabase
        .from('stripe_user_orders')
        .select('*')
        .order('order_date', { ascending: false })
        .limit(10);

      // Set a timeout for the requests
      const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 5000)
      );

      const [subscriptionResult, ordersResult] = await Promise.allSettled([
        Promise.race([subscriptionPromise, timeout]),
        Promise.race([ordersPromise, timeout])
      ]);

      if (subscriptionResult.status === 'fulfilled' && subscriptionResult.value.data) {
        setSubscription(subscriptionResult.value.data);
      }

      if (ordersResult.status === 'fulfilled' && ordersResult.value.data) {
        setOrders(ordersResult.value.data);
      }

      if (subscriptionResult.status === 'rejected' || ordersResult.status === 'rejected') {
        setDataError('Unable to load subscription data. Please try again later.');
      }
    } catch (error) {
      console.error('Error loading user data:', error);
      setDataError('Unable to connect to database. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await updateProfile(formData);
    if (success) {
      setIsEditing(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleDateString();
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const getSubscriptionStatus = () => {
    if (!subscription) return 'No active subscription';
    
    switch (subscription.subscription_status) {
      case 'active':
        return 'Active Monthly Donor';
      case 'past_due':
        return 'Payment Past Due';
      case 'canceled':
        return 'Subscription Canceled';
      case 'trialing':
        return 'Trial Period';
      default:
        return subscription.subscription_status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user?.name}!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-12 w-12 text-white" />
                  </div>
                  <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.name}</h2>
                <p className="text-gray-600 capitalize">{user?.role}</p>
                {subscription && (
                  <div className="mt-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      subscription.subscription_status === 'active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {getSubscriptionStatus()}
                    </span>
                  </div>
                )}
              </div>

              {/* Profile Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!isEditing}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"
                    placeholder="Enter your address"
                  />
                </div>

                <div className="flex space-x-2">
                  {isEditing ? (
                    <>
                      <button
                        type="submit"
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Edit className="h-4 w-4" />
                      <span>Edit Profile</span>
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Subscription Info */}
            {subscription && (
              <div className="mt-6 bg-white rounded-lg shadow p-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 rounded-full p-2">
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Subscription Status</p>
                    <p className="font-semibold text-gray-900">{getSubscriptionStatus()}</p>
                  </div>
                </div>
                {subscription.current_period_end && (
                  <div className="text-sm text-gray-600">
                    <p>Next billing: {formatDate(subscription.current_period_end)}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Loading State */}
            {loading && (
              <div className="bg-white rounded-lg shadow p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading subscription data...</p>
              </div>
            )}

            {/* Error State */}
            {dataError && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <CreditCard className="h-5 w-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-800">Subscription Data Unavailable</h3>
                </div>
                <p className="text-yellow-700 mb-4">{dataError}</p>
                {!import.meta.env.VITE_SUPABASE_URL && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>To enable subscription features:</strong> Click the "Connect to Supabase" button in the top right corner to set up your database connection.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Subscription Details */}
            {subscription && !loading && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Subscription Details</h3>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Status</p>
                      <p className="font-medium text-gray-900 capitalize">{subscription.subscription_status}</p>
                    </div>
                    {subscription.current_period_start && (
                      <div>
                        <p className="text-sm text-gray-600">Current Period</p>
                        <p className="font-medium text-gray-900">
                          {formatDate(subscription.current_period_start)} - {formatDate(subscription.current_period_end)}
                        </p>
                      </div>
                    )}
                    {subscription.payment_method_brand && (
                      <div>
                        <p className="text-sm text-gray-600">Payment Method</p>
                        <p className="font-medium text-gray-900 capitalize">
                          {subscription.payment_method_brand} ending in {subscription.payment_method_last4}
                        </p>
                      </div>
                    )}
                    {subscription.cancel_at_period_end && (
                      <div>
                        <p className="text-sm text-gray-600">Cancellation</p>
                        <p className="font-medium text-red-600">Will cancel at period end</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Order History */}
            {orders.length > 0 && !loading && (
              <div className="bg-white rounded-lg shadow">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Orders</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Receipt</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.order_id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {new Date(order.order_date).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {formatCurrency(order.amount_total, order.currency)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              order.payment_status === 'paid' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.payment_status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <button className="text-blue-600 hover:text-blue-900 flex items-center space-x-1">
                              <Download className="h-4 w-4" />
                              <span>Download</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href="/donate"
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors block"
                  >
                    <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-center">Make a Donation</p>
                    <p className="text-sm text-gray-500 text-center">Support our mission</p>
                  </a>
                  <a
                    href="/volunteer"
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors block"
                  >
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-center">Volunteer</p>
                    <p className="text-sm text-gray-500 text-center">Join our activities</p>
                  </a>
                  <a
                    href="/blog"
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors block"
                  >
                    <Mail className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-center">Read Updates</p>
                    <p className="text-sm text-gray-500 text-center">Stay informed</p>
                  </a>
                  <a
                    href="/contact"
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors block"
                  >
                    <Phone className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <p className="font-medium text-gray-900 text-center">Contact Us</p>
                    <p className="text-sm text-gray-500 text-center">Get in touch</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;