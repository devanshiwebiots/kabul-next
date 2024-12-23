import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { JustifyContent } from "@/Constant";
import { JustifyData, JustifyList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const JustifyContents = () => {
  
  return (
    <Col lg={6}>
      <Card>
        <CommonCardHeader title={JustifyContent} span={JustifyData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            {JustifyList?.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyContents;
