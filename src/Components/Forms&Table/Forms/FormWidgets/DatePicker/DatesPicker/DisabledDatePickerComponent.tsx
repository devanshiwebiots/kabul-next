import { DisabledDates } from "@/Constant";
import { addDays } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, Row } from "reactstrap";
import FieldLabel from "../Common/FieldLabel";

const DisabledDatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const disabledDates: Date[] = [today, tomorrow];

  return (
    <Row>
      <FieldLabel text={DisabledDates} />
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker className="form-control" selected={selectedDate} onChange={(date: Date | null) => setSelectedDate(date)} excludeDates={disabledDates} placeholderText="Select a date other than today or yesterday" />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DisabledDatePickerComponent;
