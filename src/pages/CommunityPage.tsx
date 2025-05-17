import React from 'react';
import Card, { CardBody, CardFooter, CardHeader } from '../components/common/Card';
import Button from '../components/common/Button';
import { MessageSquare, Users, Star, User, MessageCircle, Calendar } from 'lucide-react';

const CommunityPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Community & Support</h1>
        <p className="text-gray-600 max-w-3xl">
          Connect with other women, join forums, find mentors, and share your experiences.
          Our community is a safe space for support, learning, and growth.
        </p>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          <button className="border-purple-700 text-purple-700 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            <MessageSquare className="inline-block mr-2" size={18} />
            Forums
          </button>
          <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            <Users className="inline-block mr-2" size={18} />
            Mentors
          </button>
          <button className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            <Calendar className="inline-block mr-2" size={18} />
            Events
          </button>
        </nav>
      </div>
      
      {/* Forums Section */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Discussions</h2>
          <Button variant="secondary" icon={<MessageCircle size={18} />}>
            Start New Discussion
          </Button>
        </div>
        
        <div className="space-y-4">
          {/* Forum Post 1 */}
          <Card>
            <CardBody>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <User size={24} className="text-purple-800" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    How to apply for the Pradhan Mantri Awas Yojana?
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Started by <span className="text-purple-700">Priya S.</span> • 2 days ago
                  </p>
                  <p className="text-gray-600 mb-4">
                    I'm trying to apply for the housing scheme but I'm confused about the documentation needed. Has anyone successfully applied? What documents did you need to provide?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">government schemes</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">housing</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">paperwork</span>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="flex items-center text-gray-600">
                    <MessageCircle size={16} className="mr-1" />
                    12 replies
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Users size={16} className="mr-1" />
                    28 participants
                  </span>
                </div>
                <Button variant="tertiary" size="sm">
                  Join Discussion
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Forum Post 2 */}
          <Card>
            <CardBody>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <User size={24} className="text-purple-800" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Tips for managing small business finances
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Started by <span className="text-purple-700">Lakshmi R.</span> • 1 week ago
                  </p>
                  <p className="text-gray-600 mb-4">
                    I recently started a small tailoring business from home. I want to know how others are managing accounts, saving for taxes, and growing their business. Any advice?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">entrepreneurship</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">finance</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">small business</span>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="flex items-center text-gray-600">
                    <MessageCircle size={16} className="mr-1" />
                    34 replies
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Users size={16} className="mr-1" />
                    47 participants
                  </span>
                </div>
                <Button variant="tertiary" size="sm">
                  Join Discussion
                </Button>
              </div>
            </CardFooter>
          </Card>
          
          {/* Forum Post 3 */}
          <Card>
            <CardBody>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <User size={24} className="text-purple-800" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Vaccination schedule for infants
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Started by <span className="text-purple-700">Meena T.</span> • 3 days ago
                  </p>
                  <p className="text-gray-600 mb-4">
                    My baby is 2 months old and I'm confused about which vaccines are due when. Can someone share the government vaccination schedule and where to get them in rural areas?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">healthcare</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">children</span>
                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">vaccination</span>
                  </div>
                </div>
              </div>
            </CardBody>
            <CardFooter className="bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <span className="flex items-center text-gray-600">
                    <MessageCircle size={16} className="mr-1" />
                    21 replies
                  </span>
                  <span className="flex items-center text-gray-600">
                    <Users size={16} className="mr-1" />
                    36 participants
                  </span>
                </div>
                <Button variant="tertiary" size="sm">
                  Join Discussion
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-6 text-center">
          <Button variant="tertiary">
            View All Discussions
          </Button>
        </div>
      </div>
      
      {/* Mentors Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Mentors</h2>
          <Button variant="tertiary">
            See All Mentors
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mentor 1 */}
          <Card hoverable>
            <div className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-purple-100 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">Dr. Anjali Sharma</h3>
              <p className="text-purple-700 mb-2">Healthcare Specialist</p>
              <div className="flex items-center justify-center mb-3">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">(32)</span>
              </div>
              <p className="text-gray-600 mb-4">
                Providing guidance on women's health, childcare, and preventive healthcare in rural areas.
              </p>
              <Button variant="primary" fullWidth>
                Request Mentorship
              </Button>
            </div>
          </Card>
          
          {/* Mentor 2 */}
          <Card hoverable>
            <div className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-purple-100 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3727465/pexels-photo-3727465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">Priya Majumdar</h3>
              <p className="text-purple-700 mb-2">Financial Advisor</p>
              <div className="flex items-center justify-center mb-3">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-gray-300" />
                <span className="ml-1 text-sm text-gray-600">(27)</span>
              </div>
              <p className="text-gray-600 mb-4">
                Helping women understand personal finance, savings options, and how to access government financial schemes.
              </p>
              <Button variant="primary" fullWidth>
                Request Mentorship
              </Button>
            </div>
          </Card>
          
          {/* Mentor 3 */}
          <Card hoverable>
            <div className="p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-purple-100 mx-auto mb-4 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mentor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">Kavita Patil</h3>
              <p className="text-purple-700 mb-2">Agriculture Expert</p>
              <div className="flex items-center justify-center mb-3">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="ml-1 text-sm text-gray-600">(41)</span>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized in sustainable farming practices, organic growing methods, and agricultural subsidies.
              </p>
              <Button variant="primary" fullWidth>
                Request Mentorship
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;