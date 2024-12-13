import { Card, CardBody, Col } from "reactstrap";
import FooterButtons from "../Common/FooterButtons";
import { InlineStyles } from "@/Constant";
import InlineStyleForm from "./InlineStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineStyeData } from "@/Data/Forms";

const InlineStyle = () => {
  return (
    <Col sm={12}>
      <Card className="custom-card-style">
        <CommonCardHeader title={InlineStyles} span={InlineStyeData} />
        <CardBody className="megaoptions-border-space-sm">
          <InlineStyleForm />
        </CardBody>
        <FooterButtons footerClass="text-end" color1="warning" color2="light-warning" btn2Class='list-light-warning text-dark' />
      </Card>
    </Col>
  )
};

export default InlineStyle;
