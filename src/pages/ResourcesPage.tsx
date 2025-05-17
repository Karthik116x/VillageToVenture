import React, { useState } from 'react';
import { Search, Filter, Download, BookOpen, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/common/Button';
import Card, { CardBody, CardFooter } from '../components/common/Card';

// Mock resource data
const resourcesData = [
  {
    id: 1,
    title: 'PMJDY - Pradhan Mantri Jan Dhan Yojana',
    category: 'govt',
    description: 'Financial inclusion program providing banking services to all households',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isOfflineAvailable: true,
  },
  {
    id: 2,
    title: 'Maternal & Child Health Programs',
    category: 'health',
    description: 'Information about maternal healthcare, immunization, and child nutrition',
    image: 'https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isOfflineAvailable: true,
  },
  {
    id: 3,
    title: 'Basic Computer & Smartphone Skills',
    category: 'education',
    description: 'Learn how to use computers and smartphones for daily tasks',
    image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isOfflineAvailable: false,
  },
  {
    id: 4,
    title: 'Basic Banking & Savings',
    category: 'financial',
    description: 'How to open a bank account, save money, and understand interest rates',
    image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isOfflineAvailable: true,
  },
  {
    id: 5,
    title: 'MGNREGA Employment Scheme',
    category: 'govt',
    description: 'Rural employment guarantee scheme providing at least 100 days of wage employment',
    image: 'https://www.pexels.com/photo/women-in-traditional-clothing-on-field-13270287/',
    isOfflineAvailable: true,
  },
  {
    id: 6,
    title: 'Healthy Cooking & Nutrition',
    category: 'health',
    description: 'Nutritious recipes and guidance for balanced family meals',
    image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    isOfflineAvailable: false,
  },
];

const ResourcesPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [savedResources, setSavedResources] = useState<number[]>([]);
  
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  
  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handleSaveResource = (id: number) => {
    if (savedResources.includes(id)) {
      setSavedResources(savedResources.filter(resourceId => resourceId !== id));
    } else {
      setSavedResources([...savedResources, id]);
    }
  };
  
  const filteredResources = resourcesData.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === null || resource.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('resources.title')}</h1>
        <p className="text-gray-600 max-w-3xl">
          Access information on government schemes, healthcare, education, and financial literacy. 
          Save resources for offline viewing when you don't have internet access.
        </p>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder={t('resources.search')}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-2 overflow-x-auto py-1 md:justify-end">
            <span className="text-sm text-gray-600 whitespace-nowrap">
              <Filter size={16} className="inline mr-1" />
              {t('resources.filter')}:
            </span>
            <Button
              variant={selectedCategory === null ? 'primary' : 'tertiary'}
              size="sm"
              onClick={() => handleCategoryFilter(null)}
            >
              All
            </Button>
            <Button
              variant={selectedCategory === 'govt' ? 'primary' : 'tertiary'}
              size="sm"
              onClick={() => handleCategoryFilter('govt')}
            >
              {t('resources.category.govt')}
            </Button>
            <Button
              variant={selectedCategory === 'health' ? 'primary' : 'tertiary'}
              size="sm"
              onClick={() => handleCategoryFilter('health')}
            >
              {t('resources.category.health')}
            </Button>
            <Button
              variant={selectedCategory === 'education' ? 'primary' : 'tertiary'}
              size="sm"
              onClick={() => handleCategoryFilter('education')}
            >
              {t('resources.category.education')}
            </Button>
            <Button
              variant={selectedCategory === 'financial' ? 'primary' : 'tertiary'}
              size="sm"
              onClick={() => handleCategoryFilter('financial')}
            >
              {t('resources.category.financial')}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <Card key={resource.id} hoverable className="h-full flex flex-col">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardBody className="flex-grow">
                <span className="inline-block px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full mb-2">
                  {t(`resources.category.${resource.category}`)}
                </span>
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <Button
                  variant="primary"
                  size="sm"
                  icon={<BookOpen size={16} />}
                  className="mb-2"
                  fullWidth
                >
                  {t('read.more')}
                </Button>
              </CardBody>
              <CardFooter className="flex justify-between items-center bg-gray-50">
                <button 
                  className="flex items-center text-gray-600 hover:text-purple-700"
                  onClick={() => handleSaveResource(resource.id)}
                  aria-label={savedResources.includes(resource.id) ? "Remove from saved" : "Save for offline"}
                >
                  <Heart 
                    size={20} 
                    className={savedResources.includes(resource.id) ? "fill-purple-700 text-purple-700" : ""}
                  />
                  <span className="ml-1 text-sm">
                    {savedResources.includes(resource.id) ? "Saved" : t('save')}
                  </span>
                </button>
                <button className="flex items-center text-gray-600 hover:text-purple-700">
                  <Share2 size={20} />
                  <span className="ml-1 text-sm">{t('share')}</span>
                </button>
              </CardFooter>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">No resources found. Please try a different search term or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;