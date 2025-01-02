import { ShippingNavData } from "@/Data/Forms";
import { NavComponentProp } from "@/Types/Forms";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavComponent :React.FC<NavComponentProp> = ({ callbackActive, activeTab }) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      callbackActive(id);
    }
  };
  
  return (
    <Nav pills className="horizontal-options shipping-options">
      {ShippingNavData?.map((data, index) => (
        <NavItem className="w-100" key={index}>
          <NavLink className={`b-r-0 ${activeTab === index + 1 ? "active" : ""}`} onClick={() => handleTab(data.activeTab)}>
            <div className="cart-options">
              <div className="stroke-icon-wizard">
                <i className={`fa fa-${data.iconClassName}`} />
              </div>
              <div className="cart-options-content">
                <h4>{data.title}</h4>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
