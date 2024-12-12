import { Nav, NavItem } from "reactstrap";
import { useState } from "react";
import { Href, Personal, Views } from "@/Constant";
import { ContactNavPropsType } from "@/Types/Contact";
import { SideBarData } from "@/Data/Contact";
import Link from "next/link";
import CreateContact from "./CreateContact";
import CategoryCreate from "./CategoryCreate";

const NavComponent: React.FC<ContactNavPropsType> = ({ callbackActive }) => {
  const [activeTab, setActiveTab] = useState("1");

  const activeTabHandler = (value: string) => {
    setActiveTab(value);
    callbackActive(value);
  };

  return (
    <Nav className='main-menu contact-options' role='tablist'>
      <NavItem>
        <CreateContact />
      </NavItem>
      <NavItem>
        <span className='main-title'>{Views}</span>
      </NavItem>
      <NavItem>
        <Link href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => {setActiveTab("1");callbackActive("1");}}>
          <span className='title'>{Personal}</span>
        </Link>
      </NavItem>
      <NavItem>
        <CategoryCreate />
      </NavItem>
      {SideBarData?.map((data, index) => (
        <NavItem key={index}>
          <Link href={Href} className={activeTab === data.value ? "active" : ""} onClick={() => activeTabHandler(data.value)}>
            <span className='title'>{data.tittle}</span>
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
