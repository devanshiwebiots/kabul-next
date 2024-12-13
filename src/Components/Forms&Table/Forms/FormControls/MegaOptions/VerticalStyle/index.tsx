import { Card, CardBody, Col } from "reactstrap";
import FooterButtons from "../Common/FooterButtons";
import { VerticalStyles } from "@/Constant";
import VerticalStyleForm from "./VerticalStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalStyleData } from "@/Data/Forms";

const VerticalStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-12">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalStyles} span={VerticalStyleData} />
        <CardBody>
          <VerticalStyleForm />
        </CardBody>
        <FooterButtons footerClass="text-end" color1="primary" color2="light" />
      </Card>
    </Col>
  )
};

export default VerticalStyle;
