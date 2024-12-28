
export interface ButtonsType {
  color?: string;
  title?: string;
  id?: string;
  size?: string;
  disabled?: boolean;
  active?: boolean;
  outline?: boolean;
  text?: string;
  className?: string;
  colorTag?: string;
}


interface SubTitleType {
  text?: string;
  code?: string;
}

export interface DefaultType {
  commonButtonsData: ButtonsType[];
  title: string;
  subTitle: SubTitleType[];
  className?: string;
  raised?: boolean;
  dark?: boolean;
}

export interface CommonCardHeadingPropsType {
  bigHeadingClassName?: string;
  Heading?: string;
  smallHeading?: string;
  span?: SubTitleType[];
  headingClassName?: string;
  span2?: string;
}