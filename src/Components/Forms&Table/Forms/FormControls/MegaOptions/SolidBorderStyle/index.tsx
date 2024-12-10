import { Card, CardBody, Col } from "reactstrap";
import FooterButtons from "../Common/FooterButtons";
import { SolidBorderStyles } from "@/Constant";
import SolidBorderStyleForm from "./SolidBorderStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SolidBorderStyleData } from "@/Data/Forms";

const SolidBorderStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card>
        <CommonCardHeader title={SolidBorderStyles} span={SolidBorderStyleData} />
        <CardBody>
          <SolidBorderStyleForm />
        </CardBody>
        <FooterButtons footerClass="text-end" color1="primary" color2="light"/>
      </Card>
    </Col>
  )
};

export default SolidBorderStyle;
