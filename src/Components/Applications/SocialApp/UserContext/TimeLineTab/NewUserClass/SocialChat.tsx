import { Href, ImagePath, MoreComments } from "@/Constant";
import Link from "next/link";
import JasonBorneMessage from "./JasonBorneMessage";
import OliviaJonMessage from "./OliviaJonMessage";
import IssaBellMessage from "./IssaBellMessage";
import Image from "next/image";
 

const SocialChat = () => {
  return (
    <div className="social-chat">
      <JasonBorneMessage />
      <div className="other-msg">
      <div className="d-flex">
          <Image height={50} width={50} priority className="img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/2.png`}/>
          <div className="flex-grow-1">
            <span className="f-w-600">Alexendra Dhadio <span>1 Month Ago <i className="fa fa-reply font-primary" /></span></span>
            <p>yes, really very awesome car i see the features of this car in the official website of #Mercedes-Benz and really impressed :-)</p>
          </div>
        </div>
      </div>
      <OliviaJonMessage />
      <IssaBellMessage />
      <div className="text-center">
        <Link href={Href}>{MoreComments}</Link>
      </div>
    </div>
  );
};

export default SocialChat;