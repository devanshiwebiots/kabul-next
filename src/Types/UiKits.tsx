export interface GridCommonCardFooterType {
  className: string;
  valueClass: string;
}

interface DataProp {
  className?: string;
  text: string;
  title?: string;
}

interface NumberProp {
  className?: string;
  text?: string;
  icon?: JSX.Element;
}

export interface CommonTagCardBodyType {
  data?: DataProp[];
  number?: NumberProp[];
  pill?: boolean;
}