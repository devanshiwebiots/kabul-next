import SVG from "@/CommonComponents/SVG";
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown-form">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
        <DropdownToggle color="transparent" className="dropdown-form p-0 border-0"><i className="icon-plus" /></DropdownToggle>
        <DropdownMenu className="chat-icon dropdown-menu-start">
          <DropdownItem className="mb-2"><SVG iconId="camera" /></DropdownItem>
          <DropdownItem ><SVG iconId="attchment" /></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ChatDropMenu;