import React from 'react';
import { Heart } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-full animate-pulse">
            <Heart className="h-12 w-12 text-white" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-ping opacity-75"></div>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">ChildHope</h2>
          <p className="text-gray-600">Loading hope for children...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;