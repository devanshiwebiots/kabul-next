import { Button, Card, CardBody, Col, Form, Row } from "reactstrap";
import { AcHolderName, AccountNumber, EnterMobileNumber, IcfcCode, NetBankings, OtherDetails, Submit } from "@/Constant";
import FormInput from "./Common/FormInput";
import FormSelect from "./Common/FormSelect";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EmiBankSelect } from "@/Data/Ecommerce";

const NetBanking = () => {

  return (
    <Col xxl={4} lg={6} className="box-col-6">
      <Card>
        <CommonCardHeader title={NetBankings} headClass="pb-0" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormInput type="text" placeholder={AcHolderName} formClass="col-12" />
              <FormInput type="text" placeholder={AccountNumber} formClass="col-12" />
              <FormSelect data={EmiBankSelect} selectClass="col-6 p-r-0" />
              <FormInput type="text" placeholder={IcfcCode} formClass="col-6" />
              <FormInput type="number" placeholder={EnterMobileNumber} formClass="col-12" />
              <FormInput type="text" placeholder={OtherDetails} formClass="col-12" />
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

export default NetBanking;
