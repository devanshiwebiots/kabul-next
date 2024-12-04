import { CartType } from "@/Types/Ecommerce";

export const getCartTotal = (cartItems: CartType) => {
  let items = 0;
  items = cartItems.total * cartItems.price;
  return items;
};

export const getallCardTotal = (cartItems: CartType[]) => {
  let total = 0;
  let items = 0;

  for (var i = 0; i < cartItems.length; i++) {
    items = cartItems[i].total * cartItems[i].price;
    total = total + items;
  }
  return total;
};