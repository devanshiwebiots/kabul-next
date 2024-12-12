import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicHtmlInputControls } from "@/Constant";
import { BasicHtmlInputControlData } from "@/Data/Forms";
import { Card, Col, Form } from "reactstrap";
import BasicHtmlCardBody from "./BasicHtmlCardBody";
import BasicHtmlCardFooter from "./BasicHtmlCardFooter";

const BasicHtmlInputControl = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={BasicHtmlInputControls} span={BasicHtmlInputControlData} />
        <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
          <BasicHtmlCardBody />
          <BasicHtmlCardFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default BasicHtmlInputControl;
