import { CartTableHeader } from "@/Data/Ecommerce";

const CartTableHead = () => {
  return (
    <thead>
      <tr>
        {CartTableHeader?.map((items, i) => (
          <th key={i}>{items}</th>
        ))} 
      </tr>
    </thead>
  );
};

export default CartTableHead;
