"use client";
import SignInForm from "@/Components/Auth/SignInForm";
import { Routes } from "@/Utils/Routes";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

const UserLogin = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push(Routes.Dashboard.DefaultDashboard);
    }
  }, [session, router]);

  if (session) return null;
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

export default UserLogin;