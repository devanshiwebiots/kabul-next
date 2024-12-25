import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { Bell, Disc } from "react-feather";
import { useState } from "react";
import { CommonToastProp } from "@/Types/BonusUi";

const CommonToast: React.FC<CommonToastProp> = ({ item }) => {
  const [open, setOpen] = useState(true);

  return (
    <Toast isOpen={open}>
      <ToastHeader>
        {item.bell ? <Bell className={`toast-icons toast-${item.iconColor}`} /> : <Disc className={`toast-icons toast-${item.iconColor}`} />}
        <strong className="me-auto">{item.title}</strong>
        <small className={`${item.bell ? "" : "text-muted d-sm-block d-none"} ${item.className ? item.className : ""}`}>{item.time}</small>
        <Button close className="p-0" onClick={() => setOpen(false)}></Button>
      </ToastHeader>
      <ToastBody className="toast-dark">{item.bodyText}</ToastBody>
    </Toast>
  );
};

export default CommonToast;