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
export interface SpanType {
  text?: string;
  code?: string;
  mark?: string;
}
export interface CommonCardHeaderProp {
  title: string;
  span?: SpanType[];
  headClass?: string;
  icon?: JSX.Element;
  tagClass?: string;
  tag?: boolean;
}
export interface DashBoardCommonDropdown {
  days?: boolean;
}
export interface RatioComponent {
  className?: string;
  src: string;
  alt: string;
  style?:{ height : number }
}
