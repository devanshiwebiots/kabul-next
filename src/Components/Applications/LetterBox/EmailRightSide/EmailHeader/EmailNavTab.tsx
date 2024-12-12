import { Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import SVG from "@/CommonComponents/SVG";
import { EmailNavTabs } from "@/Data/LetterBox";

const EmailNavTab = () => {
  const [navId,setNavId] = useState("pills-important-tab")

  return (
    <Nav className="email-tabs" id="email-content-tab">
      {EmailNavTabs?.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={`pills-${data.id}-tab`} href={Href} onClick={()=>setNavId(data.id)} >
            <SVG className="stroke-icon" iconId={data.icon} />
            <span>{data.title} </span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default EmailNavTab;
