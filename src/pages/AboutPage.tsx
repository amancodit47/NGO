import React from 'react';
import { Heart, Users, Globe, Award, Target, Eye, CheckCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Child rights advocate with 15+ years of experience in international development',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'Michael Chen',
      role: 'Director of Operations',
      bio: 'Former UN official specializing in child protection and emergency response',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'Dr. Priya Patel',
      role: 'Head of Medical Programs',
      bio: 'Pediatrician with extensive experience in providing healthcare in underserved communities',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    },
    {
      name: 'James Wilson',
      role: 'Policy & Advocacy Director',
      bio: 'Legal expert focused on child protection laws and policy reform',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Foundation Established',
      description: 'ChildHope was founded with a mission to eliminate child labor worldwide'
    },
    {
      year: '2012',
      title: 'First International Program',
      description: 'Launched our first rescue operation in Bangladesh, saving 200 children'
    },
    {
      year: '2015',
      title: 'Educational Initiative',
      description: 'Started our education program, providing schooling to 1,000+ children'
    },
    {
      year: '2018',
      title: 'Healthcare Expansion',
      description: 'Launched mobile medical units reaching remote communities'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Introduced technology-based solutions for child protection'
    },
    {
      year: '2024',
      title: 'Global Impact',
      description: 'Reached 10,000+ rescued children across 15 countries'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every situation with empathy and understanding, putting children\'s needs first.'
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'We focus on measurable outcomes and sustainable solutions that create lasting change.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work with local communities, governments, and partners to maximize our reach.'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We maintain the highest standards of transparency and accountability in all our work.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About ChildHope</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Dedicated to eliminating child labor and providing hope, education, and healthcare to vulnerable children worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                To eliminate child labor worldwide by rescuing children from exploitation, providing them with education and healthcare, and working with communities to create sustainable solutions that protect children's rights and dignity.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-700">Rescue children from labor situations</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-700">Provide quality education and healthcare</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-700">Rehabilitate families and communities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  <span className="text-gray-700">Advocate for policy changes</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="h-8 w-8 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                A world where every child is safe, educated, and empowered to reach their full potential. We envision communities where children can play, learn, and grow without the burden of labor exploitation.
              </p>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">Our Global Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">10,000+</div>
                    <div className="text-sm text-purple-600">Children Rescued</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">25,000+</div>
                    <div className="text-sm text-purple-600">Children Educated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">15+</div>
                    <div className="text-sm text-purple-600">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-700">5,000+</div>
                    <div className="text-sm text-purple-600">Active Volunteers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to protect children
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                  {index % 2 === 1 && <div className="flex-1"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Dedicated professionals working to make a difference
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Recognition</h2>
            <p className="text-lg text-gray-600">
              Trusted by leading organizations worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">80G Certification</h3>
              <p className="text-gray-600">Tax-exempt status for donations in India</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UN Partnership</h3>
              <p className="text-gray-600">Official consultative status with UNICEF</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO 9001 Certified</h3>
              <p className="text-gray-600">Quality management system certification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Together, we can create a world where every child has the opportunity to thrive
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Make a Donation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;