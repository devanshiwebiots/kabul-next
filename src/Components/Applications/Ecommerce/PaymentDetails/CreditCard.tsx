import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { CardNumber, CreditCards, FirstName, ImagePath, NameOnCard } from "@/Constant";
import { Card, CardBody, Col, Form, Row } from "reactstrap";
import FormInput from "./Common/FormInput";
import FormSelect from "./Common/FormSelect";
import { CreditSelect } from "@/Data/Ecommerce";

const CreditCard = () => {

  return (
    <Col xxl={8} className="box-col-12">
      <Card>
        <CommonCardHeader title={CreditCards} headClass="pb-0" />
        <CardBody>
          <Row>
            <Col md={7} className="order-md-0 order-1">
              <Form className="theme-form mega-form">
                <FormInput type="text" placeholder={CardNumber} />
                <FormInput type="text" placeholder={FirstName} />
                <FormInput type="date" />
                <FormInput type="text" placeholder={NameOnCard} />
                <FormSelect data={CreditSelect} />
              </Form>
            </Col>
            <Col md={5} className="text-center bg-img-cover">
              <RatioImage className="img-fluid" src={`${ImagePath}/ecommerce/card.png`} alt="" />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CreditCard;
