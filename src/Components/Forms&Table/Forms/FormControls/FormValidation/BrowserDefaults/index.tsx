import { Card, Col } from "reactstrap";
import { BrowserDefault } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BrowserDefaultData } from "@/Data/Forms";
import BrowserDefaultsCardBody from "./BrowserDefaultsCardBody";

const BrowserDefaults = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={BrowserDefault} span={BrowserDefaultData} />
        <BrowserDefaultsCardBody />
      </Card>
    </Col>
  );
};

export default BrowserDefaults;
