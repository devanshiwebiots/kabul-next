import { InputType } from "reactstrap/types/lib/Input";

interface VariantsType {
    color: string;
    images: string;
  }  

export interface CartType {
    variants: VariantsType[];
    total?: any;
    sum?: number;
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    price: number;
    status: string;
    ribbonClassName?: string;
    stock: string;
    review: string;
    rating: number;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
  }

  export interface CartSliceProp {
    cart: CartType[];
    tax: number;
  }
  
  interface VariantsInterface {
    color: string;
    images: string;
  }
  
  export interface ProductItemInterface {
    id: number;
    image: string;
    name: string;
    note: string;
    description: string;
    discountPrice: string;
    status: string;
    price: number;
    stock: string;
    review: string;
    category: string;
    colors: string[];
    size: string[];
    tags: string[];
    variants: VariantsInterface[];
    ribbonClassName?: string;
    rating: number;
  }  
  export interface ProductSliceProp {
    filterToggle: boolean;
    productItem: ProductItemInterface[];
    symbol: string;
  }
  export interface ClothsDetailsTabContentProp {
    activeTab: number;
  }
  export interface FormInputProp {
    type: InputType;
    placeholder?: string;
    formClass?: string;
    rows?: number;
  }
  export interface FormSelectProp {
    data: string[];
    selectClass?: string;  
  }
  export interface OrderHistoryImageType {
    name: string;
    tag?: string;
  }
  export interface OrderHistoryTableColumns {
    image: string;
    productName: string;
    tag: string;
    size: string;
    color: string;
    articleNumber: number;
    units: number;
    price: string;
    icon: JSX.Element;
  }
  export interface OrderListProps {
    title: string;
    btnColor: string;
    btnText: string;
}
export interface CheckoutFormType {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  check: boolean;
}
  export interface AddProductSliceType {
    navId: number;
    tabId: number;
    formValue: any;
  }
