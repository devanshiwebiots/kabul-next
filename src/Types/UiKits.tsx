interface AccordionProps {
    id: string,
    icon?: boolean,
    accordionItemClass?: string,
    accordionHeaderClass: string,
    accordionHeading: string,
    spanClass: string,
    bodyText: JSX.Element,
    iconWithTitle?: JSX.Element,
}

export interface CommonAccordionProps {
    item: AccordionProps
}

export interface TabContentProp {
    basicTab: string;
}
