"use client";
import { Fragment } from "react";
import { Container, Row } from "reactstrap";
import AJAXRequestAlert from "./AJAXRequestAlert";
import AutoCloseTimer from "./AutoCloseTimer";
import BasicAlert from "./BasicAlert";
import DangerAlert from "./DangerAlert";
import InfoAlert from "./InfoAlert";
import PikachuAlert from "./PikachuAlert";
import QuestionAlert from "./QuestionAlert";
import SuccessMessageAlert from "./SuccessMessageAlert";
import TitleWithText from "./TitleWithText";
import UsernameAlert from "./UsernameAlert";
import WarningAlert from "./WarningAlert";
import WarningMode from "./WarningMode";

const SweetAlert2Container = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <BasicAlert/>
          <TitleWithText/>
          <InfoAlert/>
          <WarningAlert/>
          <PikachuAlert/>
          <QuestionAlert/>
          <UsernameAlert/>
          <SuccessMessageAlert/>
          <DangerAlert/>
          <WarningMode/>
          <AutoCloseTimer/>
          <AJAXRequestAlert/>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SweetAlert2Container;
