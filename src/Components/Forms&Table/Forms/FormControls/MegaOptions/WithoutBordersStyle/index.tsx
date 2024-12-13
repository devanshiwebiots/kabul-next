import { Card, CardBody, Col } from "reactstrap";
import FooterButtons from "../Common/FooterButtons";
import { WithoutBordersStyles } from "@/Constant";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithoutBorderData } from "@/Data/Forms";

const WithoutBordersStyle = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card className="custom-without-borders">
        <CommonCardHeader title={WithoutBordersStyles} span={WithoutBorderData} />
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <FooterButtons footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning text-dark"/>
      </Card>
    </Col>
  )
};

export default WithoutBordersStyle;
