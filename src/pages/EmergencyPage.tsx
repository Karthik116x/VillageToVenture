import React from 'react';
import { Phone, Shield, AlertTriangle, Info, MapPin } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody, CardHeader } from '../components/common/Card';

const EmergencyPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <AlertTriangle size={24} className="text-red-600 mr-2" />
          <h1 className="text-3xl font-bold text-gray-900">Emergency Services</h1>
        </div>
        <p className="text-gray-600 max-w-3xl">
          Quick access to emergency helplines, resources, and support services. In case of an emergency, 
          please contact the appropriate helpline immediately.
        </p>
      </div>
      
      {/* Emergency Helplines Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Phone size={20} className="mr-2 text-red-600" />
          Emergency Helplines
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-l-4 border-red-600">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Police Emergency</h3>
              <p className="text-gray-600 mb-4">For immediate police assistance</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">100</span>
                <Button variant="danger" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="border-l-4 border-red-600">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Women's Helpline</h3>
              <p className="text-gray-600 mb-4">For women in distress</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">1091</span>
                <Button variant="danger" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="border-l-4 border-red-600">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Medical Emergency</h3>
              <p className="text-gray-600 mb-4">For ambulance and medical help</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">108</span>
                <Button variant="danger" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="border-l-4 border-amber-500">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Child Helpline</h3>
              <p className="text-gray-600 mb-4">For children in need of aid & assistance</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-500">1098</span>
                <Button variant="secondary" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="border-l-4 border-amber-500">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Domestic Violence</h3>
              <p className="text-gray-600 mb-4">Support for victims of domestic violence</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-500">181</span>
                <Button variant="secondary" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card className="border-l-4 border-amber-500">
            <CardBody>
              <h3 className="text-xl font-semibold mb-2">Senior Citizen Helpline</h3>
              <p className="text-gray-600 mb-4">Assistance for elderly people</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-amber-500">14567</span>
                <Button variant="secondary" size="sm" icon={<Phone size={16} />}>
                  Call Now
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Emergency Resources */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Shield size={20} className="mr-2 text-purple-700" />
          Support Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="bg-purple-50">
              <h3 className="text-xl font-semibold text-purple-800">Women's Safety Measures</h3>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Download the "Shakti Emergency" app for one-touch emergency calling</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Save emergency contacts to your phone's speed dial</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Learn about your legal rights regarding domestic violence and harassment</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Share your location with trusted family members when traveling</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button variant="primary" className="w-full">
                  Download Safety Guide
                </Button>
              </div>
            </CardBody>
          </Card>
          
          <Card>
            <CardHeader className="bg-purple-50">
              <h3 className="text-xl font-semibold text-purple-800">Medical Emergency Preparedness</h3>
            </CardHeader>
            <CardBody>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keep a list of family medical information in an easily accessible place</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Know the location of the nearest hospital and primary health center</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Learn basic first aid for common emergencies</span>
                </li>
                <li className="flex items-start">
                  <Info size={18} className="text-purple-700 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Keep essential medications in stock and know their proper usage</span>
                </li>
              </ul>
              <div className="mt-4">
                <Button variant="primary" className="w-full">
                  View First Aid Guide
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      
      {/* Nearby Services */}
      <div>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <MapPin size={20} className="mr-2 text-purple-700" />
          Nearby Emergency Services
        </h2>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="mb-4 flex items-center">
            <input 
              type="text" 
              placeholder="Enter your location" 
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button variant="primary" className="rounded-l-none">
              Find Services
            </Button>
          </div>
          
          <p className="text-center text-gray-600 py-12">
            Enter your location to find nearby hospitals, police stations, and support centers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmergencyPage;