import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HelperCards } from "@/Constant";
import { HelperData, HelperDropdownData } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import HelperDropdown from "./HelperDropdown";

const HelperCard = () => {

  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={HelperCards} span={HelperData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            {
              HelperDropdownData?.map((item, index) => (
                <HelperDropdown key={index} item={item}/>
              ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HelperCard;
