import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import ContactEdit from "./ContactEdit";
import Image from "next/image";

const RightChatHeader = () => {
  const {selectedUser} = useAppSelector((state)=> state.chat)
  
  return (
    <div className="right-sidebar-title">
      <div className="common-space">
        <div className="chat-time">
          <div className="active-profile">
            <Image height={42} width={42} priority className="img-fluid rounded-circle" src={`${ImagePath}/${selectedUser?.image ? `${selectedUser?.image}` : "avtar/3.jpg"}`} alt="user"/>
            <div className="status bg-success" />
          </div>
          <div>
            <span>{selectedUser?.name ? selectedUser?.name : "Darrell Steward"}</span>
            <p>Online</p>
          </div>
        </div>
        <div className="d-flex gap-2">
          <div className="contact-edit chat-alert bg-light-secondary">
            <i className="icon-info-alt txt-secondary" />
          </div>
          <ContactEdit dropClass="chat-alert bg-light-primary"  />
        </div>
      </div>
    </div>
  );
};

export default RightChatHeader;
