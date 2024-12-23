interface Itemtype {
  id: number;
  placement?: any;
  tooltip?: string | JSX.Element;
  btnColor?: string;
  btntext?: string;
  className?: string;
}

export interface CommonTooltipProp {
  item: Itemtype;
  outline?: boolean;
}

interface ItemProps {
  item: string;
}

export interface CommonAlignmentProp {
  value: {
    items: ItemProps[];
    btnText: string;
    btnColor: string;
    directions: any;
    dropclassName: string;
  };
}

interface ItemsArray {
  item?: string;
  divider?: boolean;
}
interface itemArray extends React.HTMLAttributes<HTMLElement> {
  btnColor?: string;
  btnText: string;
  items: ItemsArray[];
  dropclassName?: string;
  toggleClassName?: string;
  size?: string;
}
export interface CommonDropdownProp {
  item: itemArray;
}

interface ItemsArrays {
  item: string;
}
interface ArrayType {
  btnColor: string;
  btnText: string;
  items: ItemsArrays[];
}
export interface SplitButtonDropdownProp {
  item: ArrayType;
}

interface HelperDropdownType {
  color: string;
  btnText: string;
  title: string;
  subtitle: string;
}
export interface CommonHelperDropdownProp {
  item: HelperDropdownType;
}