import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Surprise, TitleWithTextTitle } from "@/Constant";
import { TitleWithTextSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2"; 

const TitleWithText = () => {
  const handleAlert = () => {
    Swal.fire({
      title: "It's Magic!",
      text: "Thank you for visiting Kabul theme",
      confirmButtonColor: "var(--theme-default)"
    });
  };
  
  return (
    <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
      <Card className="height-equal">
        <CommonCardHeader title={TitleWithTextTitle} span={TitleWithTextSubTitle} />
        <CardBody className="btn-showcase">
          <Button className="m-0" onClick={handleAlert}>
            {Surprise}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TitleWithText;
