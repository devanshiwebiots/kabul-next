'use client'
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultInputMask, InputMasks } from "@/Constant";
import { InputMaskData } from "@/Data/Forms";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DateFormat from "./DateFormat";
import TimeFormat from "./TimeFormat";
import DefaultInputMaskForm from "./DefaultInputMaskForm"; 

const InputMaskContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={12}>
          <Card className="custom-input-mask">
            <CommonCardHeader title={InputMasks} span={InputMaskData} />
            <CardBody>
              <Row className="g-3">
                <DateFormat />
                <TimeFormat />
                <Col xs={12}>
                  <div className="card-wrapper border rounded-3 checkbox-checked">
                    <h6 className="sub-title">{DefaultInputMask}</h6>
                    <DefaultInputMaskForm />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InputMaskContainer;
