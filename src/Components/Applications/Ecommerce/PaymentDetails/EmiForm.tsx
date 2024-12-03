import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Emi, FirstName, ImagePath, LastName, Pincode, Submit } from "@/Constant";
import { Button, Card, CardBody, Col, Form, FormGroup, Row } from "reactstrap";
import FormInput from "./Common/FormInput";
import FormSelect from "./Common/FormSelect";
import { EmiBankSelect, EmiCardSelect, EmiYearSelect } from "@/Data/Ecommerce";
import Image from "next/image";

const EmiForm = () => {

  return (
    <Col xxl={4} lg={6} className="box-col-6">
      <Card>
        <CommonCardHeader title={Emi} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormInput type="text" placeholder={FirstName} formClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={LastName} formClass="col-6" />
              <FormInput type="text" placeholder={Pincode} formClass="col-6 p-r-0" />
              <FormSelect data={EmiBankSelect} selectClass="col-6" />
              <FormSelect data={EmiCardSelect} selectClass="col-12" />
              <FormSelect data={EmiYearSelect} selectClass="col-12" />
              <FormGroup>
                <Col xs={12}>
                  <ul className="payment-opt">
                    <li><Image height={20} width={34} src={`${ImagePath}/ecommerce/mastercard.png`} alt="" /></li>
                    <li><Image height={20} width={63} src={`${ImagePath}/ecommerce/visa.png`} alt="" /></li>
                    <li><Image height={20} width={78} src={`${ImagePath}/ecommerce/paypal.png`} alt="" /></li>
                  </ul>
                </Col>
              </FormGroup>
              <Col xs={12}>
                <Button color="primary">{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmiForm;
