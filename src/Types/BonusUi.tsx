interface CommonDataProp {
  headerClass?: string;
  headingClass?: string;
  title: string;
  text: string;
  span: string;
  bodyClass?: string;
  sm?: string;
  footerClass?: string;
  titleclass?: string
  footertitleclass?: string
}

export interface CommonCardProp {
  data: CommonDataProp;
}

interface SpanProp {
  text?: string;
  code?: string;
}

export interface CommonCreativeCardHeaderProp {
  headerClass?: string;
  titleClass?: string;
  title?: string;
  span?: SpanProp[];
}

