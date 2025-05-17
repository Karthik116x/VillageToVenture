import React from 'react';
import { WifiOff } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const OfflineBanner: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-amber-500 text-amber-900 px-4 py-2 text-center flex items-center justify-center gap-2">
      <WifiOff size={18} />
      <p>{t('offline.message')}</p>
    </div>
  );
};

export default OfflineBanner;