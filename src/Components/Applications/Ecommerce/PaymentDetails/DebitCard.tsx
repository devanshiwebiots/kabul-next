import { Button, Card, CardBody, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { CVC, CVVNumber, CardNumber, DebitCards, ExpirationDate, FullNameHere, Submit } from "@/Constant";
import FormInput from "./Common/FormInput";
import FormSelect from "./Common/FormSelect";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DebitMonthSelect, DebitYearSelect } from "@/Data/Ecommerce";

const DebitCard = () => {

  return (
    <Col xxl={4} lg={6} className="box-col-6 debit-card">
      <Card>
        <CommonCardHeader title={DebitCards} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form e-commerce-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormInput type="text" placeholder={FullNameHere} formClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={CardNumber} formClass="col-6" />
              <FormInput type="text" placeholder={CVVNumber} formClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={CVC} formClass="col-6" />
              <FormGroup>
                <Col xs={12}>
                  <Label className="col-form-label" check>{ExpirationDate}</Label>
                </Col>
              </FormGroup>
              <FormSelect data={DebitMonthSelect} selectClass="col-12 p-r-0" />
              <FormSelect data={DebitYearSelect} selectClass="col-12 p-r-0" />
            </Row>
            <Col xs={12}>
              <Button color="primary">{Submit}</Button>
            </Col>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DebitCard;
