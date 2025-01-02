import { Date, DateFormatHeading, DateFormatType } from "@/Constant";
import { Col, Form, Label, Row } from "reactstrap";
import CleaveInput from "./Common/CleaveInput";

const DateFormat = () => {

  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{DateFormatHeading}</h6>
        <Form>
          <Row className="g-3">
            <Col xs={12}>
              <Label className="col-form-label">{Date}</Label>
              <CleaveInput options={{ date: true, delimiter: "-", datePattern: ["d", "m", "Y"] }} placeholder="DD-MM-YYYY" />
            </Col>
            <Col xs={12}>
              <Label className="col-form-label">{DateFormatType}</Label>
              <CleaveInput options={{ date: true, delimiter: "-", datePattern: ["m", "Y"] }} placeholder="MM-YYYY" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default DateFormat;
