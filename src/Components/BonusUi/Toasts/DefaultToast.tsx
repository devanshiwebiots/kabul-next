import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultToasts, ImagePath } from "@/Constant";
import { DefaultToastData } from "@/Data/BonusUi/Toasts";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody, ToastHeader } from "reactstrap";

const DefaultToast = () => {
  const [open, setOpen] = useState(true);

  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToasts} span={DefaultToastData} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <ToastHeader className="toast-img">
              <Image height={100} width={100} className="rounded me-2" src={`${ImagePath}/product_list/profile.png`} alt="profile" />
              <strong className="me-auto">Kabul theme</strong>
              <small className="d-sm-block d-none">10 min ago</small>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </ToastHeader>
            <ToastBody className="toast-dark"><strong className="txt-success">Well done!</strong> You successfully read this important message.</ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
