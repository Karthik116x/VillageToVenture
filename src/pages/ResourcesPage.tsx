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
    image: 'data:image/jpeg;base64,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',
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
