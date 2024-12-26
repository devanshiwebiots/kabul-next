import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WarningModeTitle, AlertMode } from "@/Constant";
import { WarningModeSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const WarningMode = () => {
    const handleAlert = () =>
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "warning",
            confirmButtonColor: "var(--theme-default)",
        });

  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className='box-col-4'>
      <Card className='height-equal'>
        <CommonCardHeader title={WarningModeTitle} span={WarningModeSubTitle} />
        <CardBody className='btn-showcase'>
          <Button color='warning' className='m-0' onClick={handleAlert}>
            {AlertMode}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WarningMode;
