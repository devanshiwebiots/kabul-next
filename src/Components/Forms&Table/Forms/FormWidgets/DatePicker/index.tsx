"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import DefaultCalendar from "./DefaultCalendar";
import ReactstrapCalendar from "./ReactstrapCalendar";
import DatesPicker from "./DatesPicker";
import TimePicker from "./TimePicker";
 

const DatePickerContainer = () => {
  return (
    <Container fluid>
      <Row>
         <DefaultCalendar/>
         <ReactstrapCalendar/>
         <DatesPicker/>
         <TimePicker/>
      </Row>
    </Container>
  );
};

export default DatePickerContainer;
