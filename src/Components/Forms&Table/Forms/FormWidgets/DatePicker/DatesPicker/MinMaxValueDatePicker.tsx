import { MinMaxValue } from "@/Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, Row } from "reactstrap";
import FieldLabel from "../Common/FieldLabel";

const MinMaxValueDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  const maxDate = () => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 5));
  };

  return (
    <Row>
      <FieldLabel text={MinMaxValue} />
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker className="form-control flatpickr-input" selected={startDate} onChange={(date: Date | null) => setStartDate(date)} minDate={new Date()} maxDate={maxDate()} placeholderText="Select a date in February 2024" />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MinMaxValueDatePicker;