import { Href } from "@/Constant";
import { DashBoardCommonDropdown } from "@/Types/Common";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const CommonDropdown :React.FC<DashBoardCommonDropdown> = ({days}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown className="icon-dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="transparent"><i className="icon-more-alt"></i></DropdownToggle>
      <DropdownMenu end className="dropdown-menu-end">
        <DropdownItem tag="a" href={Href}>{`${days ? "Today" : "Weekly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Tomorrow" : "Monthly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Yesterday" : "Yearly"}`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommonDropdown;