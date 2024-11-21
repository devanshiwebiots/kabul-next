import { Badge } from "reactstrap";
import { Cart } from "@/Constant";
import SVG from "@/CommonComponents/SVG";
import CartHeaderList from "./CartHeaderList";

const CartHeader = () => {
  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box">
        <SVG iconId="Bag" />
        <Badge pill color="secondary">2</Badge>
        </div>
      <div className="cart-dropdown onhover-show-div">
        <h4 className="f-18 mb-0 dropdown-title">{Cart}</h4>
        <CartHeaderList />
      </div>
    </li>
  );
};
export default CartHeader;
