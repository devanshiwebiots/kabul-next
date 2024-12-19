import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineDarkLightAlerts } from "@/Constant";
import { OutLineLightData } from "@/Data/UiKits/Alert";
import { useState } from "react";
import { Clock, ThumbsUp } from "react-feather";
import { Alert, Card, CardBody, Col } from "reactstrap";

const OutlineDarkAndLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const [visibleAlert, setVisibleAlert] = useState(true);
  const onDismiss = () => setVisible(!visible);
  const onDismissAlert = () => setVisibleAlert(!visibleAlert);

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={OutlineDarkLightAlerts} span={OutLineLightData} />
        <CardBody>
          <Alert color='' isOpen={visible} toggle={onDismiss} className='txt-primary border-primary'>
            <Clock />
            <p>
              One of <strong>YouTube`s</strong> most crucial ranking factors is Watch Time.
            </p>
          </Alert>
          <Alert color='transparent' isOpen={visibleAlert} className='txt-success border-success outline-2x alert-icons' toggle={onDismissAlert}>
            <ThumbsUp />
            <p>
              <b> Well done! </b>You successfully read this important message.
            </p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineDarkAndLightAlerts;
