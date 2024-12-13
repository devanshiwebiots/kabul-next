import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DateWithTime, PreloadingTime, TimPickers, TimePickerHeading, TimePickerLimits, TimePickerMinMaxRange, TimePickerRange, hourPicker } from "@/Constant";
import { Card, CardBody, Col, Form, InputGroup, Row } from "reactstrap";
import OnlyTimePicker from "./OnlyTimePicker";
import TimePicker24Hours from "./TimePicker24Hours";
import TimePickerWithLimitedTime from "./TimePickerWithLimitedTime";
import FieldLabel from "../Common/FieldLabel";

const TimePicker = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={TimPickers} />
        <CardBody className="main-flatpickr">
          <div className="card-wrapper border rounded-3">
            <Form className="timepicker-wrapper">
              <Row>
                <FieldLabel text={TimePickerHeading} />
                <Col xxl={9} className="box-col-12"><InputGroup><OnlyTimePicker /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={hourPicker} />
                <Col xxl={9} className="box-col-12"><InputGroup><TimePicker24Hours /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={TimePickerLimits} />
                <Col xxl={9} className="box-col-12"><InputGroup><OnlyTimePicker /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={PreloadingTime} />
                <Col xxl={9} className="box-col-12"><InputGroup><OnlyTimePicker /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={TimePickerRange} />
                <Col xxl={9} className="box-col-12"><InputGroup><TimePickerWithLimitedTime /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={TimePickerMinMaxRange} />
                <Col xxl={9} className="box-col-12"><InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup></Col>
              </Row>
              <Row>
                <FieldLabel text={DateWithTime} />
                <Col xxl={9} className="box-col-12"><InputGroup className="flatpicker-calender"><TimePickerWithLimitedTime /></InputGroup></Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default TimePicker