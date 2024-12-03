import { Button, Input, InputGroup } from 'reactstrap';
import { Apply, CheckOut, ContinueShopping, TotalPrice } from "@/Constant";
import { useAppSelector } from '@/Redux/Hooks';
import Link from 'next/link';
import { getallCardTotal } from '@/Utils/EcommerceService';
import { Routes } from '@/Utils/Routes';

const Actions = () => {
  const { cart } = useAppSelector((state) => state.cartData);
  const { symbol } = useAppSelector((state) => state.product);

  return (
    <>
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input className="me-2" type="text" placeholder="Enter coupon code" />
            <Button color="primary" className="text-white">{Apply}</Button>
          </InputGroup>
        </td>
        <td className="total-amount">
          <h4 className="m-0 text-end"><span className="f-w-700">{TotalPrice} :</span></h4>
        </td>
        <td><span>{symbol}{getallCardTotal(cart)}</span></td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}>
          <Link href={Routes.ECommerce.Product} className="btn btn-secondary cart-btn-transform">{ContinueShopping}</Link></td>
        <td>
          <Link className="btn btn-success cart-btn-transform" href={Routes.ECommerce.Checkout}>{CheckOut}</Link>
        </td>
      </tr>
    </>
  );
};

export default Actions;
