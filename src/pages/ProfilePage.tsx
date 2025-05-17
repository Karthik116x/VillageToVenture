import React from 'react';
import { User, Settings, Download, Bell, BookmarkCheck, Heart, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody, CardHeader } from '../components/common/Card';

const ProfilePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Profile</h1>
        <p className="text-gray-600 max-w-3xl">
          Manage your profile, saved resources, and preferences. Customize your experience and
          access resources offline.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <div className="px-4 py-6 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-purple-100 text-purple-800 mb-4">
                <User size={42} />
              </div>
              <h2 className="text-xl font-semibold mb-1">Welcome, Geeta</h2>
              <p className="text-gray-600 mb-4">User since May 2023</p>
              <Button
                variant="primary"
                icon={<Settings size={16} />}
                fullWidth
                className="mb-2"
              >
                Account Settings
              </Button>
              <Button
                variant="tertiary"
                icon={<Download size={16} />}
                fullWidth
              >
                Download Saved Resources
              </Button>
            </div>
            
            <div className="border-t">
              <nav className="px-2 py-3">
                <ul className="space-y-1">
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-purple-100 text-purple-800">
                      <BookmarkCheck size={18} className="mr-3" />
                      Saved Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
                      <Heart size={18} className="mr-3" />
                      Favorites
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
                      <MapPin size={18} className="mr-3" />
                      My Location
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100">
                      <Bell size={18} className="mr-3" />
                      Notifications
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="bg-amber-50">
              <h3 className="text-amber-800 font-medium">Offline Access</h3>
            </CardHeader>
            <CardBody>
              <p className="text-sm text-gray-600 mb-3">
                You have 6 resources saved for offline viewing. These are available even without an internet connection.
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                60% of storage used (12 MB of 20 MB)
              </p>
              <Button variant="tertiary" size="sm" fullWidth className="mt-3">
                Manage Offline Content
              </Button>
            </CardBody>
          </Card>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader className="bg-purple-50">
              <h2 className="text-xl font-semibold text-purple-800">Saved Resources</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {/* Resource item 1 */}
                <div className="flex border-b pb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Financial resource"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-medium">PMJDY - Pradhan Mantri Jan Dhan Yojana</h3>
                    <p className="text-sm text-gray-600 mb-2">Financial inclusion program providing banking services to all households</p>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                        Available Offline
                      </span>
                      <span className="text-xs text-gray-500">Saved 2 days ago</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center ml-4">
                    <Button variant="tertiary" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                
                {/* Resource item 2 */}
                <div className="flex border-b pb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Healthcare resource"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-medium">Maternal & Child Health Programs</h3>
                    <p className="text-sm text-gray-600 mb-2">Information about maternal healthcare, immunization, and child nutrition</p>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                        Available Offline
                      </span>
                      <span className="text-xs text-gray-500">Saved 1 week ago</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center ml-4">
                    <Button variant="tertiary" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                
                {/* Resource item 3 */}
                <div className="flex border-b pb-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-md overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/2381994/pexels-photo-2381994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="Employment resource"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4 flex-grow">
                    <h3 className="text-lg font-medium">MGNREGA Employment Scheme</h3>
                    <p className="text-sm text-gray-600 mb-2">Rural employment guarantee scheme providing at least 100 days of wage employment</p>
                    <div className="flex items-center">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">
                        Available Offline
                      </span>
                      <span className="text-xs text-gray-500">Saved 3 days ago</span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 self-center ml-4">
                    <Button variant="tertiary" size="sm">
                      View
                    </Button>
                  </div>
                </div>
                
                {/* No more items indicator */}
                <div className="text-center py-4">
                  <p className="text-gray-500">You've reached the end of your saved resources.</p>
                </div>
              </div>
            </CardBody>
          </Card>
          
          <Card className="mt-6">
            <CardHeader className="bg-purple-50">
              <h2 className="text-xl font-semibold text-purple-800">Recommended For You</h2>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card hoverable className="h-full">
                  <CardBody>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full mb-2">
                      Education
                    </span>
                    <h3 className="text-lg font-semibold mb-2">Digital Literacy Basics</h3>
                    <p className="text-gray-600 mb-4">Learn essential computer and smartphone skills to navigate the digital world.</p>
                    <Button variant="tertiary" size="sm" fullWidth>
                      Save for later
                    </Button>
                  </CardBody>
                </Card>
                
                <Card hoverable className="h-full">
                  <CardBody>
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full mb-2">
                      Financial Literacy
                    </span>
                    <h3 className="text-lg font-semibold mb-2">Microfinance Opportunities</h3>
                    <p className="text-gray-600 mb-4">Discover small loan options to start or expand your business venture.</p>
                    <Button variant="tertiary" size="sm" fullWidth>
                      Save for later
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;