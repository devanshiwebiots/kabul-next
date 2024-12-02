import { Row, Table } from "reactstrap";
import { Href, ImagePath } from "@/Constant";
import { XCircle } from "react-feather";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { CartType } from "@/Types/Ecommerce";
import EmptyCart from "./EmptyCart";
import { removeCartData } from "@/Redux/Reducer/CartSlice";
import CartTableHead from "./CartTableHead";
import { CartQuantityButton } from "./CartQuantityButton";
import CartAction from "./CartAction";
import Link from "next/link";
import Image from "next/image";

const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history theme-scrollbar table-responsive wishlist">
            <Table bordered>
              <CartTableHead />
              <tbody>
                {cart?.map((item, index) => (
                  <tr key={index}>
                    <td><Image height={40} width={40} priority className="img-fluid" src={`${ImagePath}/ecommerce/${item.image}`} alt={Href} /></td>
                    <td><div className="product-name"><Link href={Href}>{item.name}</Link></div></td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td><Link href={Href} onClick={() => removeFromCart(item)}><XCircle /></Link></td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction />
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default CartData;
