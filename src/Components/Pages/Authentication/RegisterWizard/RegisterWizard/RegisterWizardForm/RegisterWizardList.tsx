import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";
import { RegisterStepData } from "@/Data/Pages/Authentication";
import { RegisterWizardListProp } from "@/Types/Auth";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";
import Link from "next/link";

const RegisterWizardList: React.FC<RegisterWizardListProp> = ({ level }) => {

  return (
    <ul className="custom-scrollbar anchor">
      <li>
        <Link className="logo text-start ps-0" href={Routes.Dashboard.DefaultDashboard}>
          <Image priority width={114} height={38} className="for-light" src={`${ImagePath}/logo/logo-1.png`} alt="loginpage" />
          <Image priority width={114} height={38} className="for-dark" src={`${ImagePath}/logo/logo.png`} alt="loginpage" />
        </Link>
      </li>
      {RegisterStepData?.map((data, index) => (
        <li key={index}>
          <Link href={`#step-${index}`} className={`${level === index + 1 ? "selected" : level > index + 1 ? "done" : "disabled"}`}>
            <h4>{index + 1}</h4>
            <h5>
              {data.title}
              {data.title === "Done" ? <i className="fa fa-thumbs-o-up ms-1" /> : " "}
            </h5>
            <small>{data.detail}</small>
          </Link>
        </li>
      ))}
      <li>
        <RatioImage src={`${ImagePath}/login/icon.png`} alt="loginpage" />
      </li>
    </ul>
  );
};

export default RegisterWizardList;