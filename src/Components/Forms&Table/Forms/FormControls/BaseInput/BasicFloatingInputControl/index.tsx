import { Card, Col, Form } from "reactstrap";
import { BasicFloatingInputControls } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FloatingInputData } from "@/Data/Forms";
import BasicFloatingCardBody from "./BasicFloatingCardBody";
import BasicFloatingFooter from "./BasicFloatingFooter";

const BasicFloatingInputControl = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={BasicFloatingInputControls} span={FloatingInputData} />
        <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
          <BasicFloatingCardBody />
          <BasicFloatingFooter />
        </Form>
      </Card>
    </Col>
  );
};

export default BasicFloatingInputControl;
