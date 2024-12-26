import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Pikachu, PikachuAlertTitle } from "@/Constant";
import { PikachuAlertSubTitle } from "@/Data/BonusUi/SweetAlert2";
import { Button, Card, CardBody, Col } from "reactstrap";
import Swal from "sweetalert2";

const PikachuAlert = () => {
    const handleAlert = () => {
        Swal.fire({
            text: "A wild Pikachu appeared! What do you want to do?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Throw Pokeball!",
            denyButtonText: "Defeat",
            cancelButtonText: "Run away!",
            confirmButtonColor: "var(--theme-default)",
            denyButtonColor: "var(--theme-default)"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({ title: "Yeah!", text: "Pikachu was caught!", icon: "success", confirmButtonColor: "var(--theme-default)", });
            } else if (result.isDenied) {
                Swal.fire({ text: "Pikachu fainted! You gained 500 XP!", confirmButtonColor: "var(--theme-default)", });
            }
            else {
                Swal.fire({ text: "Got away safely!", confirmButtonColor: "var(--theme-default)", });
            }
        });
    };

    return (
        <Col xxl={3} xl={4} sm={6} xs={12} className="box-col-4">
            <Card className="height-equal">
                <CommonCardHeader title={PikachuAlertTitle} span={PikachuAlertSubTitle} />
                <CardBody className="btn-showcase">
                    <Button color="warning" className="m-0" onClick={handleAlert}>
                        {Pikachu}
                    </Button>
                </CardBody>
            </Card>
        </Col>
    );
};

export default PikachuAlert;
