import { DefaultDates } from "@/Constant";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, Row } from "reactstrap";
import FieldLabel from "../Common/FieldLabel";

const DatePickerComponentFirst = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleChange = (date: Date | null) => setStartDate(date);

  return (
    <Row>
      <FieldLabel text={DefaultDates} />
      <Col xxl={9} className='box-col-12'>
        <InputGroup className='flatpicker-calender'>
          <DatePicker className='form-control flatpickr-input' selected={startDate} onChange={handleChange} />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default DatePickerComponentFirst;
