export interface MyProfileClassCollapseProp {
  isFilter: boolean;
}

export interface HeaderWithIconPropsTypes {
  setIsOpen: (parameter: boolean) => void;
  isOpen: boolean;
  Heading: string;
}

export interface MyActivityProp {
  heading: string;
}

export interface PeopleYouMayKnowProp {
  heading: string;
}

export interface SocialAppTabContentProp {
  activeTab: number;
}

export interface SocialAppCallBackType {
  callback: (tab: number) => void;
}