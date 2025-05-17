export type TranslationKeys = {
  [key: string]: string;
};

export type TranslationMap = {
  [language: string]: TranslationKeys;
};

export const translations: TranslationMap = {
  english: {
    // Navigation
    'nav.home': 'Home',
    'nav.resources': 'Resources',
    'nav.community': 'Community',
    'nav.profile': 'Profile',
    'nav.emergency': 'Emergency',
    'nav.about': 'About',
    
    // Home Page
    'home.title': 'Empowering Rural Women',
    'home.subtitle': 'Access to resources, information, and support',
    'home.button.explore': 'Explore Resources',
    'home.button.join': 'Join Community',
    'home.features.title': 'How We Help',
    'home.feature1.title': 'Information',
    'home.feature1.desc': 'Access government schemes, healthcare, and financial information',
    'home.feature2.title': 'Community',
    'home.feature2.desc': 'Connect with mentors and peers for support',
    'home.feature3.title': 'Education',
    'home.feature3.desc': 'Learn new skills and improve digital literacy',
    'home.feature4.title': 'Services',
    'home.feature4.desc': 'Find local resources and services in your area',
    
    // Resources Page
    'resources.title': 'Resources & Information',
    'resources.search': 'Search for resources',
    'resources.filter': 'Filter by category',
    'resources.category.govt': 'Government Schemes',
    'resources.category.health': 'Healthcare',
    'resources.category.education': 'Education',
    'resources.category.financial': 'Financial Literacy',
    
    // Common
    'offline.message': 'You are currently offline. Some features may be limited.',
    'loading': 'Loading...',
    'error': 'Something went wrong. Please try again.',
    'save': 'Save for offline',
    'share': 'Share',
    'read.more': 'Read More',
    'back': 'Back',
  },
  
  hindi: {
    // Navigation
    'nav.home': 'होम',
    'nav.resources': 'संसाधन',
    'nav.community': 'समुदाय',
    'nav.profile': 'प्रोफाइल',
    'nav.emergency': 'आपातकालीन',
    'nav.about': 'हमारे बारे में',
    
    // Home Page
    'home.title': 'ग्रामीण महिलाओं का सशक्तिकरण',
    'home.subtitle': 'संसाधनों, जानकारी और समर्थन तक पहुंच',
    'home.button.explore': 'संसाधन देखें',
    'home.button.join': 'समुदाय से जुड़ें',
    'home.features.title': 'हम कैसे मदद करते हैं',
    'home.feature1.title': 'जानकारी',
    'home.feature1.desc': 'सरकारी योजनाओं, स्वास्थ्य देखभाल और वित्तीय जानकारी तक पहुंच',
    'home.feature2.title': 'समुदाय',
    'home.feature2.desc': 'समर्थन के लिए मेंटर और साथियों से जुड़ें',
    'home.feature3.title': 'शिक्षा',
    'home.feature3.desc': 'नए कौशल सीखें और डिजिटल साक्षरता में सुधार करें',
    'home.feature4.title': 'सेवाएं',
    'home.feature4.desc': 'अपने क्षेत्र में स्थानीय संसाधन और सेवाएं खोजें',
    
    // Resources Page
    'resources.title': 'संसाधन और जानकारी',
    'resources.search': 'संसाधन खोजें',
    'resources.filter': 'श्रेणी द्वारा फ़िल्टर करें',
    'resources.category.govt': 'सरकारी योजनाएं',
    'resources.category.health': 'स्वास्थ्य देखभाल',
    'resources.category.education': 'शिक्षा',
    'resources.category.financial': 'वित्तीय साक्षरता',
    
    // Common
    'offline.message': 'आप वर्तमान में ऑफलाइन हैं। कुछ सुविधाएं सीमित हो सकती हैं।',
    'loading': 'लोड हो रहा है...',
    'error': 'कुछ गलत हो गया। कृपया पुन: प्रयास करें।',
    'save': 'ऑफलाइन के लिए सहेजें',
    'share': 'शेयर करें',
    'read.more': 'और पढ़ें',
    'back': 'वापस',
  },
  
  // Add other languages here
  tamil: {
    'nav.home': 'முகப்பு',
    'nav.resources': 'வளங்கள்',
    // Other translations
  },
  bengali: {
    'nav.home': 'হোম',
    'nav.resources': 'সম্পদ',
    // Other translations
  },
  marathi: {
    'nav.home': 'मुख्यपृष्ठ',
    'nav.resources': 'संसाधने',
    // Other translations
  },
  telugu: {
    'nav.home': 'హోమ్',
    'nav.resources': 'వనరులు',
    // Other translations
  }
};