interface FaqItemData {
  id: number;
  title: string;
  paragraph: string;
}

export interface AccordionCardPropsType {
  item: FaqItemData;
}

export interface CheckboxAndRadioType {
  title: string;
  data: string[];
  name: string;
  className?: string;
  type?: "checkbox" | "radio";
  defaultCheckedIndex?: number
}

interface ArticleVideoData{
  title:string;
  description:string
}

export interface ArticleVideoProps {
  data: ArticleVideoData[];
  icon: JSX.Element
}
