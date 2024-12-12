"use client";
import { useState } from "react";
import { Container, Row } from "reactstrap";
import EmailRightSide from "./EmailRightSide";
import EmailSidebar from "./EmailSidebar"; 

const LetterBoxContainer = () => {
  const [navId, setNavId]= useState("1");

  return (
    <Container fluid>
      <div className="email-wrap email-main-wrapper">
        <Row>
          <EmailSidebar navId={navId} setNavId={setNavId} />
          <EmailRightSide navId={navId} />
        </Row>
      </div>
    </Container>
  );
};

export default LetterBoxContainer;
