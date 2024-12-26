import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Username, UsernameTitle } from "@/Constant";
import { UsernameSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const UsernameAlert = () => {

    const handleAlert = async () => {
        Swal.fire<{ usernameInput: string }>({
            html: `Please! Submit Your Username : <input type="text" id="username"  placeholder="Username">`,
            confirmButtonColor: "var(--theme-default)",
            preConfirm: () => {
                const usernameInput = (document.getElementById("username") as HTMLInputElement).value;
                return usernameInput;
            },
        }).then((result) => {
            if (result) {
                Swal.fire({ text: `Your name is: ${result.value}`, confirmButtonColor: "var(--theme-default)", });
            }
        });
    };

    return (
        <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
            <Card className="height-equal">
                <CommonCardHeader title={UsernameTitle} span={UsernameSubTitle} />
                <CardBody className="btn-showcase">
                    <Button className="m-0" onClick={handleAlert}>
                        {Username}
                    </Button>
                </CardBody>
            </Card>
        </Col>
    )
}

export default UsernameAlert
