import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DropdownSizings } from "@/Constant";
import { SizingData, SizingList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const DropdownSizing = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={DropdownSizings} span={SizingData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            {SizingList?.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownSizing;