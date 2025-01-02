import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";
import { NavLinkList } from "@/Data/Layout/ThemeCustomizer";
import { NavLink } from "reactstrap";

const NavLinks = () => {
  return (
    <>
      {
        NavLinkList?.map((item, index) => (
          <NavLink key={index} href={item.path} target='_blank'>
            <div>
                <RatioImage className='img-fluid' src={`${ImagePath}/customizer/${item.icon}.png`} alt='' />
            </div>
            <span>{item.name}</span>
          </NavLink>
        ))}
    </>
  );
};

export default NavLinks;
