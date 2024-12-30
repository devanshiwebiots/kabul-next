'use client'
import RatioImage from "@/CommonComponents/RatioImage";
import SignInForm from "@/Components/Auth/SignInForm";
import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";

const LoginValidationContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl={7} className="order-1">
          <RatioImage className="bg-img-cover bg-center" src={`${ImagePath}/login/1.jpg`} alt="looginpage" />
        </Col>
        <Col xl={5} className="p-0">
          <div className="login-card login-dark">
            <SignInForm />
          </div>
        </Col>
      </Row>
    </Container>
  )
};

export default LoginValidationContainer;

