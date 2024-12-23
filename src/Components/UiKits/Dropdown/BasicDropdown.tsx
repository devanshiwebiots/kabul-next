import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicDropdowns } from "@/Constant";
import { DropDownData, DropDownList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const BasicDropdown = () => {

  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={BasicDropdowns} span={DropDownData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {DropDownList?.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropdown;
