import React, { useState } from 'react';
import { Shield, BookOpen, Heart, Users, Globe, Award, Play, ChevronRight, Eye } from 'lucide-react';

const OurWorkPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rescue');
  const [selectedStory, setSelectedStory] = useState(null);

  const programs = [
    {
      id: 'rescue',
      title: 'Child Rescue Operations',
      icon: Shield,
      description: 'Identifying and rescuing children from labor situations',
      color: 'bg-red-500',
      stats: { rescued: '2,345', operations: '156', countries: '8' },
      details: 'Our specialized rescue teams work with local authorities to identify and safely extract children from dangerous labor situations. We provide immediate medical care, psychological support, and safe shelter.'
    },
    {
      id: 'education',
      title: 'Education Support',
      icon: BookOpen,
      description: 'Providing quality education and learning opportunities',
      color: 'bg-blue-500',
      stats: { students: '15,670', schools: '234', teachers: '1,890' },
      details: 'We establish schools, train teachers, and provide educational resources to ensure rescued children and at-risk youth receive quality education. Our programs include basic literacy, vocational training, and life skills development.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Services',
      icon: Heart,
      description: 'Comprehensive medical care and mental health support',
      color: 'bg-green-500',
      stats: { treated: '8,945', clinics: '45', doctors: '278' },
      details: 'Our mobile medical units and permanent clinics provide essential healthcare services including medical treatment, mental health support, and nutritional programs for rescued children and their families.'
    },
    {
      id: 'rehabilitation',
      title: 'Family Rehabilitation',
      icon: Users,
      description: 'Supporting families to create stable, safe environments',
      color: 'bg-purple-500',
      stats: { families: '3,234', income: '89%', reunited: '2,890' },
      details: 'We work with families to address the root causes of child labor by providing economic opportunities, parenting support, and community development programs that create sustainable change.'
    },
    {
      id: 'advocacy',
      title: 'Policy Advocacy',
      icon: Globe,
      description: 'Working to change laws and policies that protect children',
      color: 'bg-orange-500',
      stats: { policies: '23', countries: '12', partners: '156' },
      details: 'We advocate for stronger child protection laws, work with governments to implement policy changes, and collaborate with international organizations to create systemic change.'
    }
  ];

  const successStories = [
    {
      id: 1,
      name: 'Ahmed',
      age: '19',
      country: 'Bangladesh',
      story: 'Rescued from textile factory at age 12, now studying engineering',
      image: 'https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      fullStory: 'Ahmed was working 14-hour days in a textile factory when our team found him. Through our education program, he not only learned to read and write but excelled in mathematics. Today, he is pursuing a degree in electrical engineering and dreams of building schools in his community.',
      impact: 'Now helps teach other rescued children in his spare time'
    },
    {
      id: 2,
      name: 'Maria',
      age: '16',
      country: 'Guatemala',
      story: 'Former agricultural worker, now training to become a teacher',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      fullStory: 'Maria spent her childhood working in coffee plantations instead of attending school. After being rescued, she discovered her passion for learning and teaching. She is now completing her teacher training and plans to open a school in her village.',
      impact: 'Advocates for girls\' education in her community'
    },
    {
      id: 3,
      name: 'Raj',
      age: '17',
      country: 'India',
      story: 'Escaped from brick kiln, now owns a small business',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1',
      fullStory: 'Raj was trapped in debt bondage at a brick kiln from age 8. Our intervention not only freed him but provided his family with alternative income sources. Through our vocational training, Raj learned carpentry and now runs his own furniture workshop.',
      impact: 'Employs 3 other rescued children in his workshop'
    }
  ];

  const impactData = [
    { label: 'Children Rescued', value: '10,234', change: '+23%' },
    { label: 'Children Educated', value: '25,670', change: '+18%' },
    { label: 'Families Supported', value: '8,945', change: '+31%' },
    { label: 'Communities Reached', value: '456', change: '+42%' }
  ];

  const currentProgram = programs.find(p => p.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive programs designed to rescue, rehabilitate, and empower children worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Impact Dashboard */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-Time Impact</h2>
            <p className="text-lg text-gray-600">See the difference we're making right now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactData.map((item, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                <div className="text-gray-600 mb-2">{item.label}</div>
                <div className="text-green-600 font-semibold text-sm">{item.change} this year</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions addressing every aspect of child protection</p>
          </div>

          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveTab(program.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === program.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                <program.icon className="h-5 w-5" />
                <span>{program.title}</span>
              </button>
            ))}
          </div>

          {/* Program Content */}
          {currentProgram && (
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`${currentProgram.color} p-3 rounded-lg`}>
                      <currentProgram.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{currentProgram.title}</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{currentProgram.details}</p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Evidence-based interventions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Local community partnerships</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Sustainable long-term solutions</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {Object.entries(currentProgram.stats).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real children whose lives have been transformed</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div key={story.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <span className="text-sm text-gray-500">Age {story.age}</span>
                  </div>
                  <p className="text-blue-600 font-medium mb-3">{story.country}</p>
                  <p className="text-gray-700 mb-4">{story.story}</p>
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-green-800 text-sm font-medium">Impact: {story.impact}</p>
                  </div>
                  <button
                    onClick={() => setSelectedStory(story)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Read Full Story</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we create lasting change</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: 1, title: 'Identify', description: 'Locate children in labor situations through community reports and investigations' },
              { step: 2, title: 'Rescue', description: 'Safely extract children with local authorities and provide immediate care' },
              { step: 3, title: 'Rehabilitate', description: 'Provide medical care, counseling, and safe housing for recovery' },
              { step: 4, title: 'Educate', description: 'Enroll children in schools or vocational training programs' },
              { step: 5, title: 'Reintegrate', description: 'Support families and communities to prevent re-exploitation' }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                {index < 4 && (
                  <ChevronRight className="hidden md:block absolute top-6 -right-4 h-6 w-6 text-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">See Our Work in Action</h2>
            <p className="text-lg text-gray-600">Watch how we're making a difference</p>
          </div>
          <div className="relative bg-gray-900 rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1620653/pexels-photo-1620653.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&dpr=1"
              alt="Children learning"
              className="w-full h-96 object-cover opacity-70"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 rounded-full p-6 hover:bg-opacity-100 transition-all group">
                <Play className="h-12 w-12 text-blue-600 group-hover:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Documentary: Breaking the Chains</h3>
              <p className="text-lg">Follow our rescue operation in Bangladesh and the children's journey to freedom</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for Success Story */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedStory.name}'s Story</h3>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              <img
                src={selectedStory.image}
                alt={selectedStory.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Age {selectedStory.age}
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {selectedStory.country}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">{selectedStory.fullStory}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Current Impact:</h4>
                  <p className="text-green-700">{selectedStory.impact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl text-blue-100 mb-8">
            Every child deserves safety, education, and hope. Help us make it possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Donate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Volunteer With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;