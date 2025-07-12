import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactType: 'general'
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: [
        '123 Hope Street',
        'Child Protection District',
        'City 12345, Country'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+1 (555) 123-4567',
        '+1 (555) 123-4568',
        'Emergency: +1 (555) 911-HELP'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@childhope.org',
        'volunteer@childhope.org',
        'emergency@childhope.org'
      ]
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 10:00 AM - 4:00 PM',
        'Sunday: Closed (Emergency only)'
      ]
    }
  ];

  const offices = [
    {
      country: 'United States',
      city: 'New York',
      address: '123 Hope Street, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'usa@childhope.org'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      address: '456 Charity Lane, London SW1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'uk@childhope.org'
    },
    {
      country: 'India',
      city: 'Mumbai',
      address: '789 Seva Road, Mumbai 400001',
      phone: '+91 22 1234 5678',
      email: 'india@childhope.org'
    },
    {
      country: 'Bangladesh',
      city: 'Dhaka',
      address: '321 Shishu Somman, Dhaka 1000',
      phone: '+880 2 1234 5678',
      email: 'bangladesh@childhope.org'
    }
  ];

  const faqs = [
    {
      question: 'How can I report a case of child labor?',
      answer: 'You can report cases through our emergency hotline at +1 (555) 911-HELP, email us at emergency@childhope.org, or use our secure online reporting form. All reports are treated with utmost confidentiality.'
    },
    {
      question: 'How do I become a volunteer?',
      answer: 'Visit our Volunteer page to learn about opportunities and fill out our application form. We will contact you within 5 business days to discuss next steps.'
    },
    {
      question: 'Where do my donations go?',
      answer: 'We maintain complete transparency with our finances. 85% of donations go directly to programs, 10% to administration, and 5% to fundraising. You can view our annual financial reports on our website.'
    },
    {
      question: 'Do you work internationally?',
      answer: 'Yes, we operate in 15+ countries across Asia, Africa, and Latin America. Each region has local partnerships and culturally appropriate programs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We're here to help. Reach out to us with questions, concerns, or to report a case
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Type
                  </label>
                  <select
                    name="contactType"
                    value={formData.contactType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="volunteer">Volunteer Opportunity</option>
                    <option value="donation">Donation Question</option>
                    <option value="partnership">Partnership/Collaboration</option>
                    <option value="media">Media Inquiry</option>
                    <option value="emergency">Emergency Report</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please provide as much detail as possible..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Map and Emergency Contact */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Contact</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Phone className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-red-800">Emergency Hotline</span>
                  </div>
                  <p className="text-red-700 text-lg font-bold">+1 (555) 911-HELP</p>
                  <p className="text-red-600 text-sm">Available 24/7 for urgent child protection cases</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Emergency Email</span>
                  </div>
                  <p className="text-blue-700 font-medium">emergency@childhope.org</p>
                  <p className="text-blue-600 text-sm">For urgent reports requiring immediate attention</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Location</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-gray-500 text-sm">123 Hope Street, City 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Offices</h2>
            <p className="text-lg text-gray-600">We operate worldwide to protect children everywhere</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">{office.country}</h3>
                </div>
                <p className="text-blue-600 font-medium mb-2">{office.city}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>{office.address}</p>
                  <p className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>{office.email}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <MessageCircle className="h-5 w-5 text-blue-600 mr-2" />
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Immediate Help?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team is available to assist you with urgent matters and general inquiries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
              <Phone className="h-5 w-5" />
              <span>Call Emergency Line</span>
            </button>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Start Live Chat</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;