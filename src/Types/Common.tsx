export interface SvgType {
    iconId: string;
    className?: string;
    style?: {
        height: string;
        width: string;
        fill: string;
        marginRight: string;
    };
    onClick?: VoidFunction;
  }