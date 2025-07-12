import React, { useState } from 'react';
import { Heart, CreditCard, Shield, Users, BookOpen, Home as HomeIcon, Loader2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { stripeProducts } from '../stripe-config';

const DonatePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [donationType, setDonationType] = useState('general');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { user } = useAuth();

  const donationTypes = [
    { id: 'general', name: 'General Fund', icon: Heart },
    { id: 'education', name: 'Education Support', icon: BookOpen },
    { id: 'rescue', name: 'Rescue Operations', icon: Shield },
    { id: 'rehabilitation', name: 'Rehabilitation', icon: HomeIcon },
  ];

  const handleDonation = async () => {
    if (!user) {
      alert('Please log in to make a donation');
      return;
    }

    setIsLoading(true);

    try {
      const donateProduct = stripeProducts.find(p => p.name === 'Donate');
      if (!donateProduct) {
        throw new Error('Donation product not found');
      }

      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify({
          price_id: donateProduct.priceId,
          mode: donateProduct.mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/donate`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Failed to start donation process. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every donation helps us rescue children from labor situations and provide them with education, healthcare, and hope for a better future.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">10,000+</div>
            <div className="text-gray-600">Children Rescued</div>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">25,000+</div>
            <div className="text-gray-600">Children Educated</div>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">$2.5M</div>
            <div className="text-gray-600">Raised This Year</div>
          </div>
        </div>

        {/* Donation Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h2>
            <p className="text-gray-600">Your support helps us rescue and rehabilitate children in need</p>
          </div>

          <div className="space-y-6">
            {/* Donation Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Donation Purpose</label>
              <div className="grid grid-cols-2 gap-3">
                {donationTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setDonationType(type.id)}
                    className={`p-3 rounded-lg border-2 transition-colors ${
                      donationType === type.id
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <type.icon className="h-5 w-5 mx-auto mb-1" />
                    <span className="text-sm font-medium">{type.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Monthly Donation</h3>
              <p className="text-blue-700 mb-4">Join our monthly giving program to provide sustained support for children in need.</p>
              <div className="text-2xl font-bold text-blue-900">$50.00 / month</div>
              <p className="text-sm text-blue-600 mt-2">Cancel anytime • Tax deductible</p>
            </div>

            {/* Anonymous Donation */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="anonymous"
                checked={isAnonymous}
                onChange={(e) => setIsAnonymous(e.target.checked)}
                className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="anonymous" className="text-sm font-medium text-gray-700">
                Make this donation anonymous
              </label>
            </div>

            {/* Security Notice */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Shield className="h-4 w-4" />
              <span>Your payment information is secure and encrypted</span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleDonation}
              disabled={isLoading || !user}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <CreditCard className="h-5 w-5" />
                  <span>{user ? 'Donate $50/month' : 'Please log in to donate'}</span>
                </>
              )}
            </button>

            {!user && (
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  <a href="/login" className="text-blue-600 hover:text-blue-500">
                    Log in
                  </a>{' '}
                  or{' '}
                  <a href="/register" className="text-blue-600 hover:text-blue-500">
                    create an account
                  </a>{' '}
                  to make a donation
                </p>
              </div>
            )}
          </div>

          {/* Tax Deductible Notice */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <CreditCard className="h-5 w-5 text-gray-600" />
              <span className="font-medium text-gray-900">Tax Receipt</span>
            </div>
            <p className="text-sm text-gray-600">
              Your donation is tax-deductible. A receipt will be emailed to you after completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;