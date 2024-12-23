import { Href } from "@/Constant";
import { CommonHelperDropdownProp } from "@/Types/UiKits";
import { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const HelperDropdown: React.FC<CommonHelperDropdownProp> = ({ item }) => {

    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };

    return (
        <ButtonGroup className="custom-helper-card">
            <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color={item.color} className="text-white">{item.btnText}</DropdownToggle>
                <DropdownMenu className="dropdown-block p-1 dark-form">
                    <li>
                        <h6 className="fs-6 fw-bold pb-2">{item.title}</h6>
                        <DropdownItem className="p-0 helper-truncate" href={Href}>{item.subtitle}</DropdownItem>
                    </li>
                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>

    )
}

export default HelperDropdown
