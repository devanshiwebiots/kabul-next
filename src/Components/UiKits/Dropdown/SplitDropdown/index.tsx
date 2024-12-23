import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SplitDropdowns } from "@/Constant";
import { SplitData, SplitList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import SplitButtonDropdown from "./SplitButtonDropdown";

const SplitDropdown = () => {

  return (
    <Col sm={12} xl={12}>
      <Card>
        <CommonCardHeader title={SplitDropdowns} span={SplitData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            {SplitList?.map((data, index) => (
              <SplitButtonDropdown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitDropdown;
