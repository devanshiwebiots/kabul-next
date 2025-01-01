import { Href, ImagePath, QuickOption } from "@/Constant";
import { NavCustomizerType } from "@/Types/ThemeCustomizer";
import { Nav, NavLink } from "reactstrap";
import NavLinks from "./NavLinks";
import Image from "next/image";

const NavCustomizer: React.FC<NavCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <Nav className='flex-column nac-pills'>
      <NavLink className={`${selected === "sidebar-type" ? "active" : ""}`} onClick={() => callbackNav("sidebar-type", true)} href={Href}>
        <div className='settings'>
            <Image height={22} width={22} priority className='img-fluid' src={`${ImagePath}/customizer/1.png`} alt='' />
        </div>
        <span>{QuickOption}</span>
      </NavLink>
      <NavLinks />
    </Nav>
  );
};

export default NavCustomizer;
