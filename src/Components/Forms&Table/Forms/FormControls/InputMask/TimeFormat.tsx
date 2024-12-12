import { HourMonthType, TimeFormatHeading, TimeFormatType } from "@/Constant";
import { Col, Form, Label, Row } from "reactstrap";
import CleaveInput from "./Common/CleaveInput";

const TimeFormat = () => {

  return (
    <Col sm={6}>
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{TimeFormatHeading}</h6>
        <Form>
          <Row className="g-3">
            <Col xs={12}>
              <Label className="col-form-label">{TimeFormatType}</Label>
              <CleaveInput options={{ time: true, timePattern: ["h", "m", "s"] }} placeholder="hh:mm:ss" />
            </Col>
            <Col xs={12}>
              <Label className="col-form-label">{HourMonthType}</Label>
              <CleaveInput options={{ time: true, timePattern: ["h", "m"] }} placeholder="hh:mm" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default TimeFormat;
