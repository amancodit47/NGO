import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, Heart, Download, ArrowRight } from 'lucide-react';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Processing your donation...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Donation!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your generous contribution will help us rescue and support children in need. 
            Together, we're making a real difference in their lives.
          </p>

          {/* Session ID */}
          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600 mb-2">Transaction ID:</p>
              <p className="font-mono text-sm text-gray-800 break-all">{sessionId}</p>
            </div>
          )}

          {/* Impact Information */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Heart className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Your Impact</h3>
            <p className="text-blue-700">
              Your monthly donation of $50 will help provide education, healthcare, and support 
              to children rescued from labor situations. You're now part of our community of 
              monthly supporters making sustained change possible.
            </p>
          </div>

          {/* Next Steps */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-gray-900">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Email Receipt</h4>
                <p className="text-sm text-gray-600">
                  You'll receive a tax-deductible receipt via email within 24 hours.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Monthly Updates</h4>
                <p className="text-sm text-gray-600">
                  Get regular updates on how your donations are making a difference.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>View Dashboard</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/our-work"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <span>See Our Work</span>
            </Link>
          </div>

          {/* Social Sharing */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              Help us spread the word about child protection
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Share on Facebook
              </button>
              <button className="bg-blue-400 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-500 transition-colors">
                Share on Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;