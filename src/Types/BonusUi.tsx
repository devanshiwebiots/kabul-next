export interface CommonCarouselProp {
    data: { id: number; image: string }[];
    control?: boolean;
    indecators?: boolean;
    caption?: boolean;
    slide?: boolean;
    interval?: string;
    ride?: "carousel";
    fade?: boolean;
    lightCaption?: boolean;
    dark?: boolean;
    headerTitle: string;
    subTitle: { text?: string; code?: string;}[]
  }

  export interface CarouselDataProp {
    id: number;
    image: string;
    captionText?: string;
    captionHeader?: string;
  }

  interface Span {
    text: string;
    spanText?: string;
  }

  export interface RibbonProp {
    className: string;
    ribbonClass: string;
    title?: string;
    span: Span[];
    icon?: JSX.Element;
  }

  export interface ImageLabelProp {
    onSelectFile: React.ChangeEventHandler<HTMLInputElement> | undefined;
    scale: string | number | readonly string[] | undefined;
    imgSrc: string;
    setScale: (arg0: number) => void;
    rotate: string | number | readonly string[] | undefined;
    setRotate: (arg0: number) => void;
    aspect: number | undefined;
    handleToggleAspectClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  }
