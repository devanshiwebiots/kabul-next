import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Question, QuestionAlertTitle } from "@/Constant";
import { QuestionAlertSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const QuestionAlert = () => {
    const handleAlert = () => {
        Swal.fire({
            text: "Are you sure you want to do this?",
            showCancelButton: true,
            confirmButtonText: "Aww yizz!",
            cancelButtonText: "Oh noez!",
            confirmButtonColor: "var(--theme-default)",
        })
    };
    
    return (
        <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
            <Card className="height-equal">
                <CommonCardHeader title={QuestionAlertTitle} span={QuestionAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Button color="primary" className="m-0" onClick={handleAlert}>
                        {Question}
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default QuestionAlert;
