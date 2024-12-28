export interface FlagIconType {
    getITag: (tag: string) => void
}

export interface IconMarkupType {
    itag: any,
    icons:any
}

export interface IconsCommonProps {
    title: string;
    iconType: string[];
    parentCallback: Function;
}