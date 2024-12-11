import { MultiplesDatesHeading } from "@/Constant";
import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Row } from "reactstrap";
import FieldLabel from "../Common/FieldLabel";

const MultiplesDates = () => {
  const [value, setValue] = useState<DateObject[]>([new DateObject()]);

  return (
    <Row>
      <FieldLabel text={MultiplesDatesHeading} />
      <Col xxl={9} className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker monthYearSeparator="::" inputClass="form-control" multiple value={value} onChange={(dates) => setValue(dates as DateObject[])} />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MultiplesDates;
