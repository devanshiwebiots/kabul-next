import { useAppDispatch } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducer/CartSlice";
import { HoverButtonsProp, ProductItemInterface } from "@/Types/Ecommerce";
import { Routes } from "@/Utils/Routes";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

const HoverButtons: React.FC<HoverButtonsProp> = ({ item, setDataId, setOpenModal }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(Routes.ECommerce.Cart);
  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataId(i.id);
  };

  return (
    <div className='product-hover'>
      <ul>
        <li>
          <Button color='transparent' className='border-0' onClick={() => AddToCarts(item, 1)}>
            <i className='icon-shopping-cart'></i>
          </Button>
        </li>
        <li>
          <Button color='transparent' className='border-0' onClick={() => onClickHandle(item)}>
            <i className='icon-eye'></i>
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default HoverButtons;
