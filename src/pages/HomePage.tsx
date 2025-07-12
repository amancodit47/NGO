import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Award, ArrowRight, Play } from 'lucide-react';

const HomePage: React.FC = () => {
  const stats = [
    { label: 'Children Rescued', value: '10,000+', icon: Heart },
    { label: 'Countries Served', value: '15+', icon: Globe },
    { label: 'Active Volunteers', value: '5,000+', icon: Users },
    { label: 'Success Stories', value: '25,000+', icon: Award },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Volunteer Coordinator',
      content: 'Working with ChildHope has been life-changing. Seeing children smile again after being rescued from labor situations is incredibly rewarding.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Michael Chen',
      role: 'Monthly Donor',
      content: 'I\'ve been supporting ChildHope for 3 years. Their transparency and impact reports show exactly how my donations are making a difference.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Medical Volunteer',
      content: 'The healthcare programs we run through ChildHope have saved countless lives. These children deserve every chance we can give them.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Every Child Deserves a 
                <span className="text-yellow-400"> Bright Future</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Join us in our mission to eliminate child labor and provide education, healthcare, and hope to vulnerable children worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/donate"
                  className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center group"
                >
                  Donate Now
                  <Heart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
                <Link
                  to="/volunteer"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
                >
                  Become a Volunteer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                  alt="Children learning"
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                  LIVE: Rescue Operation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                ChildHope is dedicated to eliminating child labor and providing comprehensive support to vulnerable children worldwide. We believe that every child deserves access to education, healthcare, and a safe environment to grow and thrive.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Child Rescue Operations</h3>
                    <p className="text-gray-600">Identifying and rescuing children from labor situations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Education Support</h3>
                    <p className="text-gray-600">Providing quality education and learning opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Healthcare Services</h3>
                    <p className="text-gray-600">Comprehensive medical care and mental health support</p>
                  </div>
                </div>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-800 font-semibold"
              >
                Learn More About Our Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1"
                alt="Children in classroom"
                className="rounded-lg shadow-xl"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg group hover:bg-opacity-50 transition-all">
                <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-blue-600" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-lg text-gray-600">Hear from our volunteers, donors, and partners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of supporters who are helping us create a world where every child is safe, educated, and empowered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
            >
              Start Your Monthly Donation
              <Heart className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/volunteer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors inline-flex items-center justify-center"
            >
              Apply to Volunteer
              <Users className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;