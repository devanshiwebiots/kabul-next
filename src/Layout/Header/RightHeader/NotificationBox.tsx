import Link from 'next/link';
import { Badge } from "reactstrap";
import { CheckAll, Notifications } from "@/Constant";
import { NotificationsData } from "../../../Data/Layout/Header";
import SVG from '@/CommonComponents/SVG';
import { Routes } from '@/Utils/Routes';

const NotificationBox = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="Bell" />
        <Badge pill color="primary">4</Badge>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h4 className="f-18 mb-0 dropdown-title">{Notifications}</h4>
        <div className="notification-card">
          <ul>
            {NotificationsData.map((item, index) => (
              <li className={`b-l-${item.color} bg-light-${item.color} border-4 my-2`} key={index}>
                <p className={`font-${item.color}`}>
                  {item.text} <span className={`font-${item.color}`}>{item.time}</span>
                </p>
              </li>
            ))}
            <li>
              <Link className="f-w-700" href={Routes.Chat.PrivateChat}>{CheckAll}</Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};
export default NotificationBox;
