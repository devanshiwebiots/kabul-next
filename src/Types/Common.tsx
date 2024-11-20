export interface SvgType {
    iconId: string;
    className?: string;
    style?: {
        height: string;
        width: string;
        fill: string;
        marginRight: string;
    };
    onClick?: VoidFunction;
}
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