import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SuccessMessageTitle, SuccessMessage } from "@/Constant";
import { SuccessMessageSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const SuccessMessageAlert = () => {
    const handleAlert = () =>
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
          confirmButtonColor: "var(--theme-default)",
        });

  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className='box-col-4'>
      <Card className='height-equal'>
        <CommonCardHeader title={SuccessMessageTitle} span={SuccessMessageSubTitle} />
        <CardBody className='btn-showcase'>
          <Button color='success' className='m-0' onClick={handleAlert}>
            {SuccessMessage}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SuccessMessageAlert;
