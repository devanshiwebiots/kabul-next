import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LeftBorderAlerts } from "@/Constant";
import { BorderAlertData } from "@/Data/UiKits/Alert";
import { CheckSquare, HelpCircle, Octagon } from "react-feather";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";

const BorderAlertMessages = () => {
  return (
    <Col xl='6'>
      <Card>
        <CommonCardHeader title={LeftBorderAlerts} span={BorderAlertData} />
        <CardBody className='live-dark'>
          <Alert color='light-dark' className='alert-dismissible fade show txt-dark border-left-dark'>
            <HelpCircle />
            <p className='text-dark'>Dark Alert: border-left-wrapper</p>
            <Button close aria-label='Close' />
          </Alert>
          <Alert color='light-secondary' className='alert-dismissible fade show txt-secondary border-left-secondary'>
            <Octagon />
            <p className='txt-secondary'>Secondary Alert: border-left-secondary</p>
            <Button close aria-label='Close' />
          </Alert>
          <Alert color='light-success' className='alert-dismissible fade show txt-success border-left-success mb-0'>
            <CheckSquare />
            <p className='txt-success'>Success Alert: border-left-success</p>
            <Button close aria-label='Close' />
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderAlertMessages;
