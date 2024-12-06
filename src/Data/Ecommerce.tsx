import RatioImage from "@/CommonComponents/RatioImage";
import SVG from "@/CommonComponents/SVG";
import { ImagePath } from "@/Constant";
import { ProductListTableDataColumnType, ProductListTableProduct } from "@/Types/Ecommerce";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge } from "reactstrap";

export const FilterProductData = [
  {
    id: 2,
    colClass: "col-xl-6 col-sm-6",
    filterData: ["1", "2"],
  },
  {
    id: 3,
    colClass: "col-xl-4 col-sm-4",
    filterData: ["3", "4", "5"],
  },
  {
    id: 4,
    colClass: "col-xl-3 col-sm-3",
    filterData: ["6", "7", "8", "9"],
  },
  {
    id: 6,
    colClass: "col-xl-2 col-md-4 col-sm-5",
    filterData: ["10", "11", "12", "13", "14", "15"],
  },
];

export const ProductSliderOne = [
  {
    image: "01",
    title: "Woman T-shirt",
    text: "100.00",
    rowClass: "mb-4",
  },
  {
    image: "02",
    title: "Dream Beauty Fashion",
    text: "150.00",
  },
  {
    image: "03",
    title: "VOXATI",
    text: "200.00",
  },
];

export const ProductSliderTwo = [
  {
    image: "01",
    title: "Fancy Shirt",
    text: "100.00",
    rowClass: "mb-4",
  },
  {
    image: "02",
    title: "Fancy Shirt",
    text: "100.00",
    rowClass: "mb-4",
  },
  {
    image: "03",
    title: "Fancy Shirt",
    text: "100.00",
  },
];

export const CartTableHeader = ["Product", "Product Name", "Price", "Quantity", "Action", "Total"];

export const FiltersData = [
  {
    name: "Choose Product",
    options: ["Apple iphone 13 Pro", "Wood Chair", "M185 Compact Wireless Mouse"],
  },
  {
    name: "Choose Category",
    options: ["Furniture", "Smart Gadgets", "Electrics"],
  },
  {
    name: "Choose Sub Category",
    options: ["Smart Phones", "Smart Watches", "Wireless headphone"],
  },
  {
    name: "Status",
    options: ["Sold Out", "In Stock", "Pre Order", "Limited Stock"],
  },
  {
    name: "Price",
    options: ["56000.00", "19000.00", "10000.00", "15000.00", "99000.00"],
  },
];

export const Settings = {
  slidesToShow: 1,
  arrows: true,
  dots: false,
};

export const ProductListTableData = [
  {
    image: "product_list/product-categories/laptop.png",
    name: "Apple Desktop 2024",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/ipad.png",
    name: "MacBook Air 13.3-inch",
    sku: "589KO8PPQ8",
    category: "Laptops",
    price: 45000.0,
    quantity: 10,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/mouse.png",
    name: "M185 Compact Wireless Mouse",
    sku: "02145YK796",
    category: "E-Commerce",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/dvd.png",
    name: "DVD",
    sku: "HG5667DFQ1",
    category: "Electric",
    price: 5600.0,
    quantity: 10,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/speaker.png",
    name: "Speakers",
    sku: "02145YK796",
    category: "Electric",
    price: 12200.0,
    quantity: 50,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "other-images/cart-img.jpg",
    name: "Wood chairs",
    sku: "568GH3LLQ2",
    category: "Furniture",
    price: 78000.0,
    quantity: 50,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/watch.png",
    name: "Smart watch",
    sku: "58FR7K34F6",
    category: "Electric",
    price: 25000.0,
    quantity: 48,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 3,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 5,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "email-template/3.png",
    name: "Wood Chair",
    sku: "5633GD3K54",
    category: "Furniture",
    price: 1000.0,
    quantity: 8,
    status: "Sold Out",
    rating: 3,
  },
  {
    image: "product_list/product-categories/laptop.png",
    name: "Apple Desktop 2023",
    sku: "02145YK796",
    category: "Laptops",
    price: 56000.0,
    quantity: 13,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/phone.png",
    name: "Apple iphone 13 Pro",
    sku: "56379FG3AW",
    category: "Smart Phones",
    price: 19000.0,
    quantity: 48,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/headphone.png",
    name: "Headphones",
    sku: "33KR5689B1",
    category: "Smart Headphones",
    price: 10000.0,
    quantity: 5,
    status: "In Stock",
    rating: 5,
  },
  {
    image: "product_list/product-categories/wireless-headphone.png",
    name: "Wireless-headphone",
    sku: "AD6789HEY0",
    category: "Smart Headphones",
    price: 15000.0,
    quantity: 4,
    status: "Sold Out",
    rating: 4,
  },
  {
    image: "product_list/product-categories/1.png",
    name: "Wood Chair",
    sku: "456DF78DFQ",
    category: "Furniture",
    price: 99000.0,
    quantity: 2,
    status: "Sold Out",
    rating: 2,
  },
];

const ProductListTableProductName: React.FC<ProductListTableProduct> = ({ images, name }) => {
  return (
    <div className='product-names my-2'>
      <div className='light-product-box bg-img-cover'>
        <RatioImage className='img-fluid' src={`${ImagePath}/${images}`} alt='product' />
      </div>
      <p>{name}</p>
    </div>
  );
};

const ProductListTableStatus: React.FC<ProductListTableProduct> = ({ name }) => {
  return (
    <Badge color='' className={`badge-${name === "Sold Out" ? "secondary" : "primary"}`}>
      {name}
    </Badge>
  );
};

const ProductListTableRating: React.FC<ProductListTableProduct> = ({ rate }) => {
  return <Rating initialValue={rate} size={17} fillColor='#da9817' />;
};

const ProductListTableAction = () => {
  return (
    <div className='product-action'>
      <Link href={Routes.ECommerce.AddProduct}>
        <SVG iconId='stroke-editors' />
      </Link>
      <SVG iconId='trash' />
    </div>
  );
};

export const ProductListTableDataColumn = [
  {
    name: "Product Name",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableProductName images={row.image} name={row.name} />,
    sortable: true,
    grow: 2,
  },
  {
    name: "SKU",
    selector: (row: ProductListTableDataColumnType) => `${row.sku}`,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row: ProductListTableDataColumnType) => `${row.category}`,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row: ProductListTableDataColumnType) => `${row.price}`,
    sortable: true,
  },
  {
    name: "Qty",
    selector: (row: ProductListTableDataColumnType) => `${row.quantity}`,
    sortable: true,
  },
  {
    name: "Status",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableStatus name={row.status} />,
  },
  {
    name: "Rating",
    cell: (row: ProductListTableDataColumnType) => <ProductListTableRating rate={row.rating} />,
  },
  {
    name: "Action",
    cell: () => <ProductListTableAction />,
  },
];

export const ProductSizeArray: string[] = ["M", "L", "Xl"];
export const AddProductNav = [
    {
      icon: "product-detail",
      title: "Add Product Details",
      detail: "Add Product name & details",
    },
    {
      icon: "product-gallery",
      title: "Product gallery",
      detail: "thumbnail & Add Product Gallery",
    },
    {
      icon: "product-category",
      title: "Product Categories",
      detail: "Add Product category, Status and Tags",
    },
    {
      icon: "pricing",
      title: "Selling prices",
      detail: "Add Product basic price & Discount",
    },
    {
      icon: "advance",
      title: "Advance",
      detail: "Add Meta details & Inventory details",
    },
  ];
   
  export const MultiWithHeaderData = [{ name: "NBA Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }, { name: "", divider: true }, { name: "NHL Teams", header: true }, { name: "Boston Celtics" }, { name: "Dallas Mavericks" }, { name: "Brooklyn Nets" }, { name: "Houston Rockets" }, { name: "New York Knicks" }, { name: "Memphis Grizzlies" }, { name: "Philadelphia 76ers" }, { name: "New Orleans Hornets" }, { name: "Toronto Raptors" }, { name: "San Antonio Spurs" }, { name: "Chicago Bulls" }, { name: "Denver Nuggets" }, { name: "Cleveland Cavaliers" }, { name: "Minnesota Timberwolves" }, { name: "Detroit Pistons" }, { name: "Portland Trail Blazers" }, { name: "Indiana Pacers" }, { name: "Oklahoma City Thunder" }, { name: "Milwaukee Bucks" }, { name: "Utah Jazz" }, { name: "Atlanta Hawks" }, { name: "Golden State Warriors" }, { name: "Charlotte Bobcats" }, { name: "Los Angeles Clippers" }, { name: "Miami Heat" }, { name: "Los Angeles Lakers" }, { name: "Orlando Magic" }, { name: "Phoenix Suns" }, { name: "Washington Wizards" }, { name: "Sacramento King" }];

  export const TypesOfProductData = [
    {
      check: true,
      title: "Fixed Price",
    },
    {
      id: "4",
      title: "BOGO(Buy one, Get one)",
    },
    {
      id: "5",
      title: "Seasonal or holiday discount",
    },
    {
      id: "6",
      title: "Percentage-based discount(%)",
    },
    {
      id: "7",
      title: "Volume or bulk discount",
    },
  ];
  
export const ProductFiveNavData = ["Inventory", "Additional Options", "Shipping"];

export const InvoiceFourData = [
  {
    title: "Proposal & Brochure Design",
    price: "300",
    quantity: "1",
    total: "300",
  },
  {
    title: "Web design and development",
    price: "400",
    quantity: "2",
    total: "800",
  },
  {
    title: "Logo & Brand  design",
    price: "240",
    quantity: "2",
    total: "480",
  },
  {
    title: "Stationary Design",
    price: "100",
    quantity: "1",
    total: "100",
  },
];

export const InvoiceSixTable = ["Item Description", "Hours", "Rate", "SubTotal"];

export const InvoiceSixData = [
  {
    title: "Red Shirt",
    detail: "Wild West - Red Cotton Blend Regular Fit Men's Formal Shirt.",
    hours: "5",
    total: "375",
  },
  {
    title: "Brown Dress",
    detail: "Aask - Brown Polyester Blend Women's Fit & Flare Dress.",
    hours: "3",
    total: "225",
  },
  {
    title: "Flower Dress",
    detail: "Skyblue Flower Printed Sleevless Strappy Dress.",
    hours: "10",
    total: "750",
  },
  {
    title: "Red Skirt",
    detail: "R L F - Red Cotton Blend Women's A-Line Skirt.",
    hours: "10",
    total: "750",
  },
];