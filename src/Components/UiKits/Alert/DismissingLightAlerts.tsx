import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DismissingLightAlert } from "@/Constant";
import { DismissingData } from "@/Data/UiKits/Alert";
import { useState } from "react";
import { Bell } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={DismissingLightAlert} span={DismissingData} />
        <CardBody>
          <Alert fade color="warning" className="alert-dismissible" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p>The alert-light-warning class can be used to create an alert like this one.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
