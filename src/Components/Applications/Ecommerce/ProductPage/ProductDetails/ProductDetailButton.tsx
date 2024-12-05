import { AddToCart, AddToWishList, BuyNow } from "@/Constant";
import { Routes } from "@/Utils/Routes";
import { Button } from "reactstrap";

const ProductDetailButton = () => {

  return (
    <div className="m-t-15 btn-showcase">
      <Button tag="a" color="primary" href={Routes.ECommerce.Cart}>
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Button>
      <Button tag="a" color="success" href={Routes.ECommerce.Checkout}>
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Button>
      <Button tag="a" href={Routes.ECommerce.Wishlist}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Button>
    </div>
  );
};

export default ProductDetailButton;
