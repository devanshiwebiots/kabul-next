import React from "react";
import { CardHeader } from "reactstrap";
import CommonDropdown from "@/CommonComponents/CommonDropdown";
import { DashboardCommonHeaderType } from "@/Types/Dashboard";

const DashboardCommonHeader: React.FC<DashboardCommonHeaderType> = ({ title, tagClass, dropDownFalse, children, classname }) => {
  return (
    <CardHeader className={`card-no-border pb-0 d-flex justify-content-between mt-0 ${classname}`}>
      <h4 className={tagClass ? tagClass : ""}>{title}</h4>
      {!dropDownFalse ? <CommonDropdown /> : null}
      {children}
    </CardHeader>
  );
};

export default DashboardCommonHeader;
