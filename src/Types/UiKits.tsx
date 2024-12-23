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