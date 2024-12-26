import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DangerTitle, Danger } from "@/Constant";
import { DangerSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const DangerAlert = () => {
    const handleAlert = () =>
        Swal.fire({
          title: "It's danger",
          text: "Something went wrong!",
          icon: "error",
          confirmButtonColor: "var(--theme-default)",
        });

  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className='box-col-4'>
      <Card className='height-equal'>
        <CommonCardHeader title={DangerTitle} span={DangerSubTitle} />
        <CardBody className='btn-showcase'>
          <Button color='danger' className='m-0' onClick={handleAlert}>
            {Danger}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DangerAlert;
