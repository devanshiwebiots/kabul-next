"use client";
import SignInForm from "@/Components/Auth/SignInForm";
import React from "react";
import { Col, Container, Row } from "reactstrap";

const LoginSweetAlertContainer = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs={12} className="p-0">
          <div className="login-card login-dark">
            <SignInForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSweetAlertContainer;
