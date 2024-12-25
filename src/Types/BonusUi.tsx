export interface BasicTreesProp {
  variant?: string;
  isOpen?: boolean;
  className?: string;
  onClick?: (e: object) => void;
}

interface ItemTypeProp {
  iconColor?: string;
  title?: string | JSX.Element;
  time?: string;
  bodyText?: string;
  bell?: boolean;
  round?: boolean;
  className?:string;
}

export interface CommonToastProp {
  item: ItemTypeProp;
}

export interface PlacementToastContentProp {
  data: string;
}
