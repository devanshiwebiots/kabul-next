import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Informational, InfoTitle } from "@/Constant";
import { InfoSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const InfoAlert = () => {
  const handleAlert = () => {
    Swal.fire({
      text: "Please Click on this button it's big surprise for you.",
      confirmButtonColor: "var(--theme-default)"
    }).then(() => {
      Swal.fire({
        text: "Thank you for visit Kabul theme: true",
        confirmButtonColor: "var(--theme-default)"
      })
    });;
  };

  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={InfoTitle} span={InfoSubTitle} />
        <CardBody className="btn-showcase">
          <Button color="info" className="m-0" onClick={handleAlert}>
            {Informational}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InfoAlert;
