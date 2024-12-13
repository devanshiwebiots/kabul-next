import { Href } from "@/Constant";
import Link from "next/link";

const UserProfileIcon = () => {
  return (
    <ul className="share-icons">
      <li><Link className="social-icon bg-primary me-2" href={Href}><i className="fa fa-smile-o" /></Link></li>
      <li><Link className="social-icon bg-secondary me-2" href={Href}><i className="fa fa-wechat" /></Link></li>
      <li><Link className="social-icon bg-warning" href={Href}><i className="fa fa-share-alt" /></Link></li>
    </ul>
  );
};

export default UserProfileIcon;
