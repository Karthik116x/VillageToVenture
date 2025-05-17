import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Landmark, MapPin, VolumeX, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/common/Button';
import Card, { CardBody } from '../components/common/Card';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  const [isAudioEnabled, setIsAudioEnabled] = React.useState(false);
  
  const toggleAudio = () => {
    setIsAudioEnabled(!isAudioEnabled);
  };

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-purple-800 text-white">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.title')}</h1>
            <p className="text-xl mb-8">{t('home.subtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                icon={<BookOpen size={20} />}
                onClick={() => window.location.href = '/resources'}
              >
                {t('home.button.explore')}
              </Button>
              <Button 
                variant="tertiary"
                size="lg" 
                icon={<Users size={20} />}
                onClick={() => window.location.href = '/community'}
              >
                {t('home.button.join')}
              </Button>
            </div>
          </div>
        </div>
        <button 
          onClick={toggleAudio}
          className="absolute bottom-4 right-4 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30"
          aria-label={isAudioEnabled ? "Disable audio narration" : "Enable audio narration"}
        >
          {isAudioEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('home.features.title')}</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card hoverable className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-purple-100 text-purple-800 mb-4">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.feature1.title')}</h3>
                <p className="text-gray-600">{t('home.feature1.desc')}</p>
              </CardBody>
            </Card>
            
            <Card hoverable className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-100 text-orange-600 mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.feature2.title')}</h3>
                <p className="text-gray-600">{t('home.feature2.desc')}</p>
              </CardBody>
            </Card>
            
            <Card hoverable className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-4">
                  <Landmark size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.feature3.title')}</h3>
                <p className="text-gray-600">{t('home.feature3.desc')}</p>
              </CardBody>
            </Card>
            
            <Card hoverable className="animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <CardBody className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('home.feature4.title')}</h3>
                <p className="text-gray-600">{t('home.feature4.desc')}</p>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8">Join thousands of women across rural India who are already benefiting from our resources and community.</p>
          <Button 
            variant="primary" 
            size="lg" 
            icon={<ArrowRight size={20} />} 
            iconPosition="right"
            onClick={() => window.location.href = '/resources'}
          >
            Explore Resources
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;