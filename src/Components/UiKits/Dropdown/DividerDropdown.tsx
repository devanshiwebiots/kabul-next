import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DividerDropdowns } from "@/Constant";
import { DividerData, DividerSortData } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const DividerDropdown = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={DividerDropdowns} span={DividerData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {DividerSortData?.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DividerDropdown;
