import { AddToCartButton, ViewDetails } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducer/CartSlice";
import { ModalButtonsProp, ProductItemInterface } from "@/Types/Ecommerce";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ModalButtons :React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(Routes.ECommerce.Cart);
  };
    
  return (
    <div className="addcart-btn">
      <Link href={Routes.ECommerce.Cart} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartButton}
      </Link>
      <Link href={Routes.ECommerce.ProductPage} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  );
};

export default ModalButtons;
