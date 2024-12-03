import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { Address, City, Cod, EnterMobileNumber, FirstName, LastName, Pincode, State, Submit } from "@/Constant";
import FormInput from "./Common/FormInput";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const CodForm = () => {
  return (
    <Col xxl={4} lg={6} className="box-col-6">
      <Card>
        <CommonCardHeader title={Cod} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormInput type="text" placeholder={FirstName} formClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={LastName} formClass="col-6" />
              <FormInput type="text" placeholder={Pincode} formClass="col-6 p-r-0" />
              <FormInput type="number" placeholder={EnterMobileNumber} formClass="col-6" />
              <FormInput type="text" placeholder={State} formClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={City} formClass="col-6" />
              <FormInput type="textarea" placeholder={Address} formClass="col-12" rows={3} />
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

export default CodForm;
