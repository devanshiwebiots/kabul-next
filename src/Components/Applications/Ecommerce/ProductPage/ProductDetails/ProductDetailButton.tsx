import { AddToCart, AddToWishList, BuyNow } from "@/Constant";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";

const ProductDetailButton = () => {

  return (
    <div className="m-t-15 btn-showcase">
      <Link className="btn btn-primary" href={Routes.ECommerce.Cart}>
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Link>
      <Link className="btn btn-success" href={Routes.ECommerce.Checkout}>
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Link>
      <Link className="btn btn-secondary" href={Routes.ECommerce.Wishlist}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Link>
    </div>
  );
};

export default ProductDetailButton;
