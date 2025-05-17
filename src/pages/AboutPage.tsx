import React from 'react';
import { Award, Heart, Users, Target, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
            <p className="text-xl mb-8">
              Empowering rural women in India with access to essential resources, information, and 
              community support to overcome digital divides and create lasting socio-economic impact.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Shakti</h2>
              <p className="text-gray-600 mb-4">
                Shakti was created to address the digital divide that prevents many rural women in India 
                from accessing essential resources and opportunities. Our platform bridges this gap by 
                providing a user-friendly digital solution that connects women to information, support, 
                and services in their regional languages.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that every woman deserves equal access to information regardless of her 
                location, education level, or digital literacy. By making resources accessible in 
                multiple languages, optimizing for low bandwidth, and supporting offline functionality, 
                we're creating an inclusive platform that works for all women.
              </p>
              <p className="text-gray-600">
                Our team consists of technologists, social workers, and community organizers who are 
                passionate about empowering women and driving positive social change across rural India.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-64 bg-purple-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7551663/pexels-photo-7551663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Rural women using smartphone" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 bg-purple-100 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Group learning session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 bg-purple-100 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8471767/pexels-photo-8471767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Woman entrepreneur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 bg-purple-100 rounded-lg overflow-hidden mt-8">
                <img 
                  src="https://images.pexels.com/photos/7550345/pexels-photo-7550345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Community meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and shape our approach to empowering rural women.
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="h-full">
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-800 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusion</h3>
                <p className="text-gray-600">
                  Creating solutions that work for all women regardless of their literacy level, 
                  language, or technological access.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Empathy</h3>
                <p className="text-gray-600">
                  Understanding the unique challenges faced by rural women and designing solutions 
                  with their specific needs in mind.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-gray-600">
                  Providing reliable, accurate, and valuable information that women can trust 
                  and apply in their daily lives.
                </p>
              </CardBody>
            </Card>
            
            <Card className="h-full">
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Impact</h3>
                <p className="text-gray-600">
                  Focusing on solutions that create real, measurable change in women's lives and 
                  their communities.
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Impact Stats */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Together, we're creating positive change across rural India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">25,000+</div>
              <p className="text-xl text-purple-200">Women Reached</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">215</div>
              <p className="text-xl text-purple-200">Villages Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">18</div>
              <p className="text-xl text-purple-200">Languages Supported</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">750+</div>
              <p className="text-xl text-purple-200">Success Stories</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of our journey to empower rural women across India. Together, we can bridge 
            the digital divide and create lasting change.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              icon={<Users size={20} />}
            >
              Volunteer With Us
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              icon={<ArrowRight size={20} />} 
              iconPosition="right"
            >
              Explore Resources
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;