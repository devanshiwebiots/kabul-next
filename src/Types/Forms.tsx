export interface ButtonDropdownListProp {
  color: string;
  title?: string;
  options: string[];
  outline?: boolean;
  divider: boolean;
}

export interface CustomFormSelectProp {
  inputId: string;
  options: string[];
  title: string;
}
export interface CommonCardFooterProp {
  footerClass?: string;
  color1: string;
  btn2Class?: string;
  btn1Class?: string;
  color2: string;
}

interface StarProps {
  id: number;
  starClass?: string;
}
export interface HorizontalStyleFormProp {
  id: number;
  color: string;
  name: string;
  mediaBodyClass?: string;
  badgeTitle: string;
  digits: string;
  spanText: string;
  colClass?: string;
  check?: boolean;
  spanClass?: string;
  star?: StarProps[];
  cardClass?: string;
}
export interface VerticalStyleFormProp {
  id: number;
  color: string;
  cardClass?: string;
  name?: string;
  badgeTitle: string;
  mediaBodyClass?: string;
  digits: string;
  spanText: string;
  check?: boolean;
  spanClass?: string;
  star?: StarProps[];
}
export interface VariationRadioProp {
  id: number;
  labelText: string;
  image?: string;
  icon?: string;
  name?: string;
  defaultChecked?: boolean;
  iconColor?: string;
}
