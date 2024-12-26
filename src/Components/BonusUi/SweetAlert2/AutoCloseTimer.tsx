import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AutoCloseTimerTitle, Timer } from "@/Constant";
import { AutoCloseTimerSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";
 

const AutoCloseTimer = () => {
  const handleAlert = () => {
    let timerInterval: NodeJS.Timeout;

    Swal.fire({
      title: "Auto close alert!",
      html: "just a wait! I will close in 3 second!",
      timer: 3000,
      showConfirmButton: false,
      timerProgressBar: true,
    })
  };

  return (
    <Col xxl={3} xl={4} sm={6} xs={12}  className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={AutoCloseTimerTitle} span={AutoCloseTimerSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="m-0" onClick={handleAlert}>
            {Timer}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseTimer;
