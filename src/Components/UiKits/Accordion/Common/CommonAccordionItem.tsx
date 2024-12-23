import { CommonAccordionProps } from "@/Types/UiKits";
import { ChevronDown } from "react-feather";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const CommonAccordionItem:React.FC<CommonAccordionProps> = ({ item }) => {
  return (
    <AccordionItem className={item.accordionItemClass}>
      <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
        {item.iconWithTitle && item.iconWithTitle}
        <span className={item.spanClass}>{item.accordionHeading}</span>
        {item.icon && <ChevronDown className={`svg-color ${item.spanClass}`} />}
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>{item.bodyText}</AccordionBody>
    </AccordionItem>
  );
};

export default CommonAccordionItem;
