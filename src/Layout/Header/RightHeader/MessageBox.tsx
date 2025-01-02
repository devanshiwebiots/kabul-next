import { X } from "react-feather";
import Link from 'next/link';
import { ImagePath, Message,CheckAll } from "@/Constant";
import { MessageBoxData } from "../../../Data/Layout/Header";
import SVG from "@/CommonComponents/SVG";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";

const MessageBox = () => {
  return (
    <li className="onhover-dropdown">
      <div className="message position-relative">
        <SVG iconId="Message" />
      </div>
      <div className="onhover-show-div message-dropdown">
        <h4 className="f-18 mb-0 dropdown-title">{Message}</h4>
        <ul>
          {MessageBoxData?.map((item, index) => (
            <li key={index}>
              <div className="d-flex align-items-start">
                <div className="message-img bg-light-primary">
                <Image width={40} height={40} priority src={`${ImagePath}/user/${item.image}.jpg`} alt="" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1">
                    <Link href={Routes.Chat.PrivateChat}>{item.title}</Link>
                  </h5>
                  <p>{item.text}</p>
                </div>
                <div className="notification-right"><X /></div>
              </div>
            </li>
          ))}
          <li><Link className="f-w-700" href={Routes.Chat.PrivateChat}>{CheckAll}</Link></li>
        </ul>
      </div>
    </li>
  );
};

export default MessageBox;
