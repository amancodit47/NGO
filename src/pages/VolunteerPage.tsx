import React, { useState } from 'react';
import { Heart, Clock, Users, MapPin, Calendar, CheckCircle, Star } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  dateOfBirth: string;
  occupation: string;
  skills: string[];
  experience: string;
  availability: string;
  motivation: string;
  languages: string[];
  emergencyContact: string;
  emergencyPhone: string;
  backgroundCheck: boolean;
  termsAccepted: boolean;
}

const VolunteerPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedOpportunities, setSelectedOpportunities] = useState<string[]>([]);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<VolunteerFormData>();

  const opportunities = [
    {
      id: 'education',
      title: 'Education Support',
      description: 'Help teach children basic literacy and numeracy skills',
      timeCommitment: '4-6 hours/week',
      location: 'Remote or On-site',
      requirements: ['Basic education', 'Patience with children', 'Reliable internet'],
      impact: 'Directly help 5-10 children improve their reading and math skills'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Assistance',
      description: 'Support medical professionals in providing healthcare to children',
      timeCommitment: '8-12 hours/week',
      location: 'Field locations',
      requirements: ['Medical background preferred', 'First aid certification', 'Travel flexibility'],
      impact: 'Assist in providing healthcare to 50+ children monthly'
    },
    {
      id: 'fundraising',
      title: 'Fundraising & Events',
      description: 'Organize fundraising events and campaigns',
      timeCommitment: '2-4 hours/week',
      location: 'Remote',
      requirements: ['Event planning experience', 'Social media skills', 'Networking ability'],
      impact: 'Help raise $1000+ monthly for child rescue operations'
    },
    {
      id: 'advocacy',
      title: 'Advocacy & Awareness',
      description: 'Spread awareness about child labor issues',
      timeCommitment: '3-5 hours/week',
      location: 'Remote',
      requirements: ['Communication skills', 'Social media presence', 'Passion for advocacy'],
      impact: 'Reach 1000+ people monthly with awareness campaigns'
    },
    {
      id: 'counseling',
      title: 'Counseling Support',
      description: 'Provide emotional support to rescued children',
      timeCommitment: '6-8 hours/week',
      location: 'Rehabilitation centers',
      requirements: ['Psychology background', 'Counseling certification', 'Language skills'],
      impact: 'Help 10-15 children process trauma and build resilience'
    },
    {
      id: 'administration',
      title: 'Administrative Support',
      description: 'Help with documentation, data entry, and organizational tasks',
      timeCommitment: '4-6 hours/week',
      location: 'Remote',
      requirements: ['Computer skills', 'Attention to detail', 'Organizational skills'],
      impact: 'Support operations that help 100+ children monthly'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Education Volunteer',
      duration: '2 years',
      quote: 'Volunteering with ChildHope has been the most rewarding experience of my life. Seeing children learn to read and write fills my heart with joy.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Dr. Mark Johnson',
      role: 'Healthcare Volunteer',
      duration: '3 years',
      quote: 'The medical missions have allowed me to use my skills to make a real difference in childrens lives. Every child deserves access to healthcare.',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Fundraising Coordinator',
      duration: '1.5 years',
      quote: 'Organizing fundraising events has connected me with amazing people who share the same passion for protecting children. Together we make a difference.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
    }
  ];

  const skillOptions = [
    'Teaching/Education', 'Healthcare/Medical', 'Fundraising', 'Event Planning',
    'Social Media', 'Photography', 'Writing', 'Translation', 'Counseling',
    'Administrative', 'IT/Technology', 'Legal', 'Accounting', 'Marketing'
  ];

  const languageOptions = [
    'English', 'Spanish', 'French', 'Arabic', 'Hindi', 'Bengali', 'Portuguese',
    'Chinese', 'Urdu', 'German', 'Italian', 'Dutch', 'Russian', 'Other'
  ];

  const onSubmit = (data: VolunteerFormData) => {
    console.log('Form submitted:', data);
    alert('Thank you for your volunteer application! We will review your information and contact you within 5 business days.');
  };

  const toggleOpportunity = (id: string) => {
    setSelectedOpportunities(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Volunteer With Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our global community of volunteers making a real difference in children's lives
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentStep(2)}
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Impact</h2>
            <p className="text-lg text-gray-600">See how our volunteers are making a difference</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">5,000+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">50,000+</div>
              <div className="text-gray-600">Hours Contributed</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">25,000+</div>
              <div className="text-gray-600">Children Helped</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-yellow-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900">45+</div>
              <div className="text-gray-600">Countries</div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600">Find the perfect way to contribute your skills and passion</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                  <button
                    onClick={() => toggleOpportunity(opportunity.id)}
                    className={`p-2 rounded-full ${
                      selectedOpportunities.includes(opportunity.id)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                    }`}
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.timeCommitment}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {opportunity.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-1">Impact:</h4>
                  <p className="text-sm text-blue-700">{opportunity.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Stories</h2>
            <p className="text-lg text-gray-600">Hear from our amazing volunteers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-500 ml-1">{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      {currentStep === 2 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Application</h2>
                <p className="text-gray-600">Help us match you with the perfect volunteer opportunity</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                {/* Skills and Experience */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills & Expertise (select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {skillOptions.map((skill) => (
                      <label key={skill} className="flex items-center">
                        <input
                          type="checkbox"
                          value={skill}
                          {...register('skills')}
                          className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous Volunteer Experience
                  </label>
                  <textarea
                    {...register('experience')}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your previous volunteer experience..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    {...register('availability', { required: 'Please select your availability' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your availability</option>
                    <option value="1-3 hours/week">1-3 hours per week</option>
                    <option value="4-6 hours/week">4-6 hours per week</option>
                    <option value="7-10 hours/week">7-10 hours per week</option>
                    <option value="10+ hours/week">10+ hours per week</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                  {errors.availability && (
                    <p className="mt-1 text-sm text-red-600">{errors.availability.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Why do you want to volunteer with ChildHope? *
                  </label>
                  <textarea
                    {...register('motivation', { required: 'Please tell us your motivation' })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Share your motivation for volunteering..."
                  />
                  {errors.motivation && (
                    <p className="mt-1 text-sm text-red-600">{errors.motivation.message}</p>
                  )}
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      {...register('backgroundCheck', { required: 'Background check consent is required' })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to a background check as part of the volunteer screening process
                    </span>
                  </label>
                  {errors.backgroundCheck && (
                    <p className="mt-1 text-sm text-red-600">{errors.backgroundCheck.message}</p>
                  )}

                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                      className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-3 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the terms and conditions and volunteer code of conduct
                    </span>
                  </label>
                  {errors.termsAccepted && (
                    <p className="mt-1 text-sm text-red-600">{errors.termsAccepted.message}</p>
                  )}
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of volunteers who are helping us create a world where every child is safe and educated
          </p>
          <button 
            onClick={() => setCurrentStep(2)}
            className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Start Your Volunteer Journey
          </button>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;