export interface InitOptions {
    supportedLngs: string[];
    fallbackLng: string;
    lng: string;
    fallbackNS: string;
    defaultNS: string;
    ns: string;
    detection: {
      caches: string[];
    };
  }
  
export interface I18nProviderProps {
    children: React.ReactNode;
    language: string;
  }