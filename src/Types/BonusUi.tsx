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