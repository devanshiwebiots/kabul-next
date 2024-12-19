"use client";
import { Container, Row } from "reactstrap";
import AdditionalContent from "./AdditionalContent";
import AlertsWithIconsandTextActions from "./AlertsWithIconsandTextActions";
import BorderAlertMessages from "./BorderAlertMessages";
import DarkTheme from "./DarkTheme";
import DismissingDarkAlerts from "./DismissingDarkAlerts";
import DismissingLightAlerts from "./DismissingLightAlerts";
import LightTheme from "./LightTheme";
import LiveAlert from "./LiveAlert";
import OutlineDarkAndLightAlerts from "./OutlineDarkAndLightAlerts";

const AlertContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DarkTheme />
        <LightTheme />
        <OutlineDarkAndLightAlerts />
        <AlertsWithIconsandTextActions />
        <DismissingDarkAlerts />
        <DismissingLightAlerts />
        <LiveAlert />
        <BorderAlertMessages />
        <AdditionalContent />
      </Row>
    </Container>
  );
};

export default AlertContainer;
