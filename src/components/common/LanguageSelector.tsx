import React, { useState } from 'react';
import { Language, useLanguage } from '../../context/LanguageContext';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'english', name: 'English' },
    { code: 'hindi', name: 'हिन्दी (Hindi)' },
    { code: 'tamil', name: 'தமிழ் (Tamil)' },
    { code: 'bengali', name: 'বাংলা (Bengali)' },
    { code: 'marathi', name: 'मराठी (Marathi)' },
    { code: 'telugu', name: 'తెలుగు (Telugu)' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === language)?.name || 'English';
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-md bg-purple-700 hover:bg-purple-600 focus:outline-none"
      >
        <Globe size={16} />
        <span>{getCurrentLanguageName()}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 animate-fadeIn">
          <ul className="py-1">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm ${
                    language === lang.code
                      ? 'bg-purple-100 text-purple-900 font-medium'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;