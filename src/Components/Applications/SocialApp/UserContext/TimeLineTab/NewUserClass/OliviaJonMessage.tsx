import { ImagePath } from "@/Constant";
import Image from "next/image";

const OliviaJonMessage = () => {
  return (
    <div className="other-msg">
      <div className="d-flex">
        <Image height={50} width={50} priority className="img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/3.png`} />
        <div className="flex-grow-1">
          <span className="f-w-600">Olivia Jon <span>15 Days Ago <i className="fa fa-reply font-primary" /></span>
          </span>
          <p>i like lexus cars, lexus cars are most beautiful with the awesome features, but this car is really outstanding than lexus</p>
        </div>
      </div>
    </div>
  );
};

export default OliviaJonMessage;
