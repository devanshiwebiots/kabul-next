import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LeftBorderAlerts } from "@/Constant";
import { BorderAlertData } from "@/Data/UiKits/Alert";
import { CheckSquare, HelpCircle, Octagon } from "react-feather";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";

const BorderAlertMessages = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={LeftBorderAlerts} span={BorderAlertData} />
        <CardBody className='live-dark'>
          <Alert color='light-dark' className='alert-dismissible fade show txt-dark border-left-wrapper'>
            <HelpCircle />
            <p className='text-dark'>You can check in on some of those fields below.</p>
            <Button close aria-label='Close' />
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderAlertMessages;
