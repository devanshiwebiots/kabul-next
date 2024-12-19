import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Bell } from "react-feather";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DismissingLightAlert, Href } from "@/Constant";
import { DismissingLightData } from "@/Data/UiKits/Alert";
import Link from "next/link";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={DismissingLightAlert} span={DismissingLightData} />
        <CardBody>
          <Alert fade color="" className="alert-warning alert-dismissible" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p>The alert-light-warning class can be used to create an alert like this one.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
