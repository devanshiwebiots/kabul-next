import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Warning, WarningAlertTitle } from "@/Constant";
import { WarningAlertSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const WarningAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "var(--theme-default)",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({ text: "Poof! Your imaginary file has been deleted!", icon: "success", confirmButtonColor: "var(--theme-default)" });
      } else {
        Swal.fire({ text: "Your imaginary file is safe!", confirmButtonColor: "var(--theme-default)" });
      }
    });
  };
  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={WarningAlertTitle} span={WarningAlertSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="m-0" onClick={handleAlert}>
            {Warning}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WarningAlert;
