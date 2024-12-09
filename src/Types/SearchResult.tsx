export interface InformationCommonPropsType {
  item: {
    id:number;
    url: string;
    title: string;
    detail: string;
    videoLink: string;
    showStar?: boolean[];
  };
}

export interface PagesSortProp {
  pageClass: string;
}

export interface ShowRatingProps {
  item: boolean[];
}

export interface SearchTabContentProp {
  activeTab: number;
}

export interface SearchTabsPropsType {
  callbackActive: (val: number) => void;
  activeTabValue: number;
}