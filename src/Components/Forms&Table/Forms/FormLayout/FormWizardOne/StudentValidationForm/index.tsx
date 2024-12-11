import { Card, Col, CardBody } from "reactstrap";
import { StudentValidationFormHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StudentValidationData } from "@/Data/Forms";
import StudentValidationFormCardBody from "./StudentValidationFormCardBody";

const StudentValidationForm = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={StudentValidationFormHeading} span={StudentValidationData}/>
        <CardBody className="custom-input">
          <StudentValidationFormCardBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudentValidationForm;
