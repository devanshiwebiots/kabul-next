import React, { useState } from "react";
import CommonModal from "../Common/CommonModal";
import { ButtonSmall, Href, PopoverModal, TooltipsAndPopovers, TooltipsModal } from "@/Constant";
import { Button, Tooltip } from "reactstrap";
import Link from "next/link";

const ToolTipAndPopover = () => {
  const [toolAndPopover, setToolAndPopover] = useState(false);
  const tooltipsAndPopoversToggle = () => setToolAndPopover(!toolAndPopover);
  const [tooltipLinkOne, setTooltipLinkOne] = useState(false);
  const toggleLinkOne = () => setTooltipLinkOne(!tooltipLinkOne);

  return (
    <>
      <Button color="info" onClick={tooltipsAndPopoversToggle}>{TooltipsAndPopovers}</Button>
      <CommonModal isOpen={toolAndPopover} toggle={tooltipsAndPopoversToggle} centered title="Tooltip and Popover modal">
        <h4>{PopoverModal}</h4>
        <p className="mt-2">This 
          <Button color="success" className="popover-test" id="Tooltip-ModalBtnProp" title="this is amazing content">{ButtonSmall}</Button> triggers a popover on click.
        </p>
        <hr />
        <h4>{TooltipsModal}</h4>
        <p className="mt-2">
          <Link className="tooltip-test text-info" href={Href} id="TooltipExample"> This link </Link>
          <Tooltip autohide placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</Tooltip>and
          <Link className="tooltip-test text-info" href={Href} id="TooltipExample"> that link </Link>
          <Tooltip placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</Tooltip>have tooltips on hover.
        </p>
      </CommonModal>
    </>
  );
};

export default ToolTipAndPopover;