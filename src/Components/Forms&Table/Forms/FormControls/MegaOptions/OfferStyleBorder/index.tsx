import { Card, CardBody, Col } from "reactstrap";
import FooterButtons from "../Common/FooterButtons";
import { OfferStyleBorders } from "@/Constant";
import OfferStyleBorderForm from "./OfferStyleBorderForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OfferBorderStyleData } from "@/Data/Forms";

const OfferStyleBorder = () => {
  return (
    <Col sm={12} xxl={6} className="box-col-6">
      <Card className="custom-offer-border">
        <CommonCardHeader title={OfferStyleBorders} span={OfferBorderStyleData} />
        <CardBody className="megaoptions-border-space-sm">
          <OfferStyleBorderForm />
        </CardBody>
        <FooterButtons footerClass="text-end" color1="success" color2="light-success" btn2Class='list-light-success txt-dark' />
      </Card>
    </Col>
  )
};

export default OfferStyleBorder;
