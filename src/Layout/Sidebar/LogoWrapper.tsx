import SVG from "@/CommonComponents/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setToggleSidebar } from "@/Redux/Reducer/Layout/LayoutSlice";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";
import Link from "next/link";

const LogoWrapper = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="logo-wrapper">
        <Link href={Routes.Dashboard.DefaultDashboard}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo.png`} width={114} height={38} priority alt="" />
        </Link>
        <div className="toggle-sidebar" onClick={() => dispatch(setToggleSidebar(!toggleSidebar))}>
          <SVG className='sidebar-toggle' iconId='toggle-icon' />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={Routes.Dashboard.DefaultDashboard}>
          <Image className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} width={32} height={32} alt="" />
        </Link>
      </div>
    </>
  );
};
export default LogoWrapper;