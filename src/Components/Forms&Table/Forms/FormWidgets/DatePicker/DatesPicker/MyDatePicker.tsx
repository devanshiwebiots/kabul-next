import { RangeDatePicker } from "@/Constant";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Row } from "reactstrap";
import FieldLabel from "../Common/FieldLabel";

const MyDatePicker = () => {
  const [value, setValue] = useState<DateObject[]>([new DateObject()]);

  return (
    <Row>
      <FieldLabel text={RangeDatePicker} />
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker inputClass="form-control" range value={value} onChange={(dates) => setValue(dates as DateObject[])} />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MyDatePicker;
