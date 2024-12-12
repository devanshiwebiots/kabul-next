import CountUp from "react-countup";
import { Label, List, ListInlineItem } from "reactstrap";
import { Href } from "@/Constant";
import { CommonUserFooterType } from "@/Types/Users";
import { CommonUserData } from "@/Data/Users";
import Link from "next/link";

const UserFooter :React.FC<CommonUserFooterType> = ({listClass}) => {
  return (
    <div className={`"like-comment mt-3 ${listClass ? listClass : ""}`}>
      <List type="inline" className="justify-content-start mt-2">
        {CommonUserData.map((item, index) => (
          <ListInlineItem className={item.listClass} key={index}>
            <Label className="m-0">
              <Link href={Href}>
                <i className={`fa fa-${item.icon}`}></i>
              </Link>
              {item.text}
            </Label>
            <CountUp end={item.count} className="ms-2" delay={1}/>
          </ListInlineItem>
        ))}
      </List>
    </div>
  );
};

export default UserFooter;
