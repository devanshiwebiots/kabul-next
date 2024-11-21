import { Checkout, Href, ImagePath, ViewCart, OrderTotal, EmptyCart } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeCartData } from "@/Redux/Reducer/CartSlice";
import { CartType } from "@/Types/Ecommerce";
import { Routes } from "@/Utils/Routes";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { X } from "react-feather";

const CartHeaderList = () => {

  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cartData);
  const removefromcart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <ul>
      {cart?.length > 0 ? (
        <Fragment>
          {cart.map((item) => (
            <li key={item.id}>
              <div className="d-flex">
                <Image width={50} height={55} className='img-fluid b-r-5 img-50' src={`${ImagePath}/ecommerce/${item.image}`} alt={Href} priority />
                <div className="flex-grow-1">
                  <span>{item.name}</span>
                  <h6>{item.total}{" X $ "}{item.price}</h6>
                </div>
                <div className="close-circle">
                  <a href={Href} onClick={() => removefromcart(item)}><X /></a>
                </div>
              </div>
            </li>
          ))}
          <li className="total">
            <h5 className="mb-0">
              {OrderTotal} <span className="f-right">{"$" + cart.reduce((acc, item) => acc + item.price * item.total, 0)}</span>
            </h5>
          </li>
          <li>
            <Link className="view-cart" href={Routes.ECommerce.Cart}>{ViewCart}</Link>
            <Link className="view-checkout f-right" href={Routes.ECommerce.Checkout}>{Checkout}</Link>
          </li>
        </Fragment>
      ) : (
        <li className={`cart-empty ${cart.length === 0 ? "show" : ""}`}>
          <div className="cart-image">
            <Image height={172} width={172} src={`${ImagePath}/other-images/order-trash.gif`} className='img-fluid mb-4 mt-4' alt='Empty Cart' />
          </div>
          <h5>{EmptyCart}</h5>
        </li>
      )}
    </ul>
  )
}

export default CartHeaderList
