import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Heart, CreditCard, Shield, Download, Users, BookOpen, Home as HomeIcon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const stripePromise = loadStripe('pk_test_your_publishable_key_here');

const DonationForm: React.FC = () => {
  const [amount, setAmount] = useState(50);
  const [isRecurring, setIsRecurring] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('general');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();

  const donationOptions = [
    { amount: 25, impact: 'Provides school supplies for 1 child' },
    { amount: 50, impact: 'Funds 1 week of education for 1 child' },
    { amount: 100, impact: 'Supports 1 child for a full month' },
    { amount: 250, impact: 'Rescues and rehabilitates 1 child' },
  ];

  const donationTypes = [
    { id: 'general', name: 'General Fund', icon: Heart },
    { id: 'education', name: 'Education Support', icon: BookOpen },
    { id: 'rescue', name: 'Rescue Operations', icon: Shield },
    { id: 'rehabilitation', name: 'Rehabilitation', icon: HomeIcon },
  ];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: customAmount ? parseFloat(customAmount) * 100 : amount * 100,
          currency: 'usd',
          recurring: isRecurring,
          donationType,
          anonymous: isAnonymous,
          userId: user?.id,
        }),
      });

      const { clientSecret } = await response.json();

      // Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: user?.name || 'Anonymous Donor',
            email: user?.email,
          },
        },
      });

      if (error) {
        console.error('Payment failed:', error);
        alert('Payment failed. Please try again.');
      } else {
        console.log('Payment succeeded:', paymentIntent);
        alert('Thank you for your donation! A receipt has been sent to your email.');
        // Generate and download receipt
        generateReceipt(paymentIntent);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const generateReceipt = (paymentIntent: any) => {
    // This would generate a PDF receipt
    const receiptData = {
      amount: paymentIntent.amount / 100,
      date: new Date().toLocaleDateString(),
      transactionId: paymentIntent.id,
      donorName: user?.name || 'Anonymous Donor',
      donationType: donationType,
    };
    
    console.log('Receipt generated:', receiptData);
    // Implementation would use jsPDF or html2pdf to generate actual PDF
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div className="text-center mb-8">
        <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Make a Donation</h2>
        <p className="text-gray-600">Your support helps us rescue and rehabilitate children in need</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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

        {/* Amount Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Donation Amount</label>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {donationOptions.map((option) => (
              <button
                key={option.amount}
                type="button"
                onClick={() => {
                  setAmount(option.amount);
                  setCustomAmount('');
                }}
                className={`p-4 rounded-lg border-2 transition-colors ${
                  amount === option.amount && !customAmount
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-xl font-bold text-gray-900">${option.amount}</div>
                <div className="text-sm text-gray-600">{option.impact}</div>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-700">$</span>
            <input
              type="number"
              placeholder="Custom amount"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Recurring Donation */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="recurring"
            checked={isRecurring}
            onChange={(e) => setIsRecurring(e.target.checked)}
            className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="recurring" className="text-sm font-medium text-gray-700">
            Make this a monthly recurring donation
          </label>
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

        {/* Card Element */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Payment Information</label>
          <div className="p-4 border border-gray-300 rounded-md">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Shield className="h-4 w-4" />
          <span>Your payment information is secure and encrypted</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {isProcessing ? 'Processing...' : `Donate $${customAmount || amount}`}
        </button>
      </form>

      {/* Tax Deductible Notice */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Download className="h-5 w-5 text-gray-600" />
          <span className="font-medium text-gray-900">Tax Receipt</span>
        </div>
        <p className="text-sm text-gray-600">
          Your donation is tax-deductible. A receipt will be emailed to you after completion.
        </p>
      </div>
    </div>
  );
};

const DonatePage: React.FC = () => {
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
        <Elements stripe={stripePromise}>
          <DonationForm />
        </Elements>
      </div>
    </div>
  );
};

export default DonatePage;