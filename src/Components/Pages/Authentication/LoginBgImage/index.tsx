"use client";
import RatioImage from "@/CommonComponents/RatioImage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { ImagePath } from "@/Constant";
import SignInForm from "@/Components/Auth/SignInForm";

const LoginBgImageContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={7}>
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/2.jpg`} alt="loginpage" />
        </Col>
        <Col xl={5} className="p-0">
          <div className="login-card login-dark">
            <SignInForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginBgImageContainer;
