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
interface ItemProp {
  id: number;
  placement?: any;
  Popoverheader?: string;
  Popoverbody?: string;
  btnColor?: string;
  btntext?: string;
  trigger?: string;
}
export interface CommonPopoverProp {
  key?: number;
  item: ItemProp;
}