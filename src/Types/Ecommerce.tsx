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
  export interface AddProductSliceType {
    navId: number;
    tabId: number;
    formValue: any;
  }

  export interface InvoicePrintType {
    handlePrint?: VoidFunction;
  }