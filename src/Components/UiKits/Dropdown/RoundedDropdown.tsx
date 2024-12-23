import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RoundedDropdowns } from "@/Constant";
import { RoundedDatas, RoundedList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const RoundedDropdown = () => {
  
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={RoundedDropdowns} span={RoundedDatas} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {RoundedList?.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  )
};

export default RoundedDropdown;