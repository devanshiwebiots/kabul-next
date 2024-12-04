import { CancelledOrder, Href, ImagePath, NewOrder, ShippedOrder } from "@/Constant";
import { OrderHistoryImageType, OrderHistoryTableColumns } from "@/Types/Ecommerce";
import Image from "next/image";
import Link from "next/link";
import { Clock, CreditCard, Gift, MoreVertical, Truck } from "react-feather";

export const ProductSocialLinks = [
  {
    link: "https://www.facebook.com/",
    text: "facebook",
  },
  {
    link: "https://accounts.google.com/",
    text: "google-plus",
  },
  {
    link: "https://twitter.com/",
    text: "twitter",
  },
  {
    link: "https://www.instagram.com/",
    text: "instagram",
  },
  {
    link: "https://rss.app/",
    text: "rss",
  },
];

export const Brands = ["Clothing", "Bags", "Footwear", "Watches", "ACCESSORIES"]

export const ProductBrandData = [
  {
    icon: <Truck />,
    text: "Free Shipping",
    span: "Free Shipping World Wide",
  },
  {
    icon: <Clock />,
    text: "24 X 7 Service",
    span: "Online Service For New Customer",
  },
  {
    icon: <Gift />,
    text: "Festival Offer",
    span: "New Online Special Festival",
  },
  {
    icon: <CreditCard />,
    text: "Online Payment",
    span: "Contrary To Popular Belief. ",
  },
];

export const ClothsDetailsData = ["Febric", "Video", "Details", "Brand"];

export const CreditSelect = ["Select Type", "Master", "Visa"]

export const DebitMonthSelect = ["Select Month", "Jan", "Fab", "March", "April"]

export const DebitYearSelect = ["Select Year", "2015", "2016", "2017", "2023", "2019"]

export const EmiBankSelect = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];

export const EmiCardSelect = ["Select Card", "2", "3", "4", "5"];

export const EmiYearSelect = ["Select Duration", "2015-2016", "2016-2017", "2017-2023", "2023-2019"];

export const OrderData = [
  {
    id: 1,
    name: "Women Top",
    image: "6",
  },
  {
    id: 2,
    name: "Women Shorts",
    image: "5",
  },
  {
    id: 3,
    name: "Cyclamen",
    image: "4",
  },
  {
    id: 4,
    name: "Men dashed Denim jacket",
    image: "3",
  },
  {
    id: 5,
    name: "Blue shirt",
    image: "2",
  },
  {
    id: 6,
    name: "Red shirt",
    image: "1",
  },
  {
    id: 7,
    name: "Red shirt",
    image: "1",
  },
  {
    id: 8,
    name: "Women Top",
    image: "6",
  },
  {
    id: 9,
    name: "Women Shorts",
    image: "5",
  },
];

export const OrderHistoryData = [
  {
    image: "15",
    productName: "Ladies side bag",
    tag: "Processing",
    size: "M",
    color: "Black",
    articleNumber: 5748214,
    units: 1,
    price: "$25",
    icon: <MoreVertical />,
  },
  {
    image: "3",
    productName: "Fancy Ladies Jacket",
    tag: "Shipped",
    size: "XL",
    color: "Light gray",
    articleNumber: 3581714,
    units: 1,
    price: "$24",
    icon: <MoreVertical />,
  },
  {
    image: "1",
    productName: "Long Top",
    tag: "Processing",
    size: "M",
    color: "Lavender",
    articleNumber: 4215738,
    units: 1,
    price: "$21",
    icon: <MoreVertical />,
  },

  {
    image: "4",
    productName: "Man shoes",
    tag: "Processing",
    size: "8",
    color: "Black & white",
    articleNumber: 1756457,
    units: 1,
    price: "$18",
    icon: <MoreVertical />,
  },

  {
    image: "2",
    productName: "Ladies Handbag",
    tag: "Shipped",
    size: "25cm x 20cm",
    color: "Black",
    articleNumber: 6748142,
    units: 1,
    price: "$14",
    icon: <MoreVertical />,
  },
  {
    image: "10",
    productName: "Ladies side bag",
    tag: "Shipped",
    size: "22cm x 18cm",
    color: "Brown",
    articleNumber: 7451725,
    units: 1,
    price: "$13",
    icon: <MoreVertical />,
  },
  {
    image: "14",
    productName: "Watch",
    tag: "Cancelled",
    size: "27mm",
    color: "Brown",
    articleNumber: 2471254,
    units: 1,
    price: "$12",
    icon: <MoreVertical />,
  },
  {
    image: "13",
    productName: "Fancy watch",
    tag: "Processing",
    size: "35mm",
    color: "Blue",
    articleNumber: 5476182,
    units: 1,
    price: "$10",
    icon: <MoreVertical />,
  },
  {
    image: "11",
    productName: "Slipper",
    tag: "Cancelled",
    size: "6",
    color: "Blue",
    articleNumber: 8475112,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
  {
    image: "12",
    productName: "Ladies Slipper",
    tag: "Shipped",
    size: "6",
    color: "Brown & white",
    articleNumber: 4127421,
    units: 1,
    price: "$6",
    icon: <MoreVertical />,
  },
];

const OrderHistoryImage: React.FC<OrderHistoryImageType> = ({ name }) => {
  return <Image height={30} width={30} className="img-fluid" src={`${ImagePath}/product/${name}.png`} alt="#" />;
};

const OrderDataHistory: React.FC<OrderHistoryImageType> = ({ name, tag }) => {
  return (
    <div className="product-name ">
      <Link href={Href}>{name}</Link>
      <div className="order-process">
        <span className="order-process-circle"></span>
        {tag}
      </div>
    </div>
  );
};

export const OrderHistoryDataColumn = [
  {
    name: "Product",
    cell: (row: OrderHistoryTableColumns) => <OrderHistoryImage name={row.image} />,
  },
  {
    name: "Product Name",
    cell: (row: OrderHistoryTableColumns) => <OrderDataHistory name={row.productName} tag={row.tag} />,
    sortable: true,
  },
  {
    name: "Size",
    selector: (row: OrderHistoryTableColumns) => `${row.size}`,
    sortable: true,

  },
  {
    name: "Color",
    selector: (row: OrderHistoryTableColumns) => `${row.color}`,
    sortable: true,

  },
  {
    name: "Article Number",
    selector: (row: OrderHistoryTableColumns) => row["articleNumber"],
    sortable: true,

  },
  {
    name: "Units",
    selector: (row: OrderHistoryTableColumns) => row["units"],

  },
  {
    name: "Price",
    selector: (row: OrderHistoryTableColumns) => row["price"],
    sortable: true,

  },
  {
    name: <MoreVertical />,
    cell: (row: OrderHistoryTableColumns) => row["icon"],

  },
];

export const OrderListData = [
  {
    title: NewOrder,
    buttonColor: "primary",
    buttonText: "Processing",
  },
  {
    title: ShippedOrder,
    buttonColor: "success",
    buttonText: "Shipped",
  },
  {
    title: CancelledOrder,
    buttonColor: "danger",
    buttonText: "Cancelled",
  },
];

export const WhishListProduct = [
  {
    name: "Women Top",
    image: "6",
  },
  {
    name: "Women Shorts",
    image: "5",
  },
  {
    name: "Cyclamen",
    image: "4",
  },
  {
    name: "Men dashed Denim jacket",
    image: "3",
  },
  {
    name: "Blue shirt",
    image: "2",
  },
  {
    name: "Red shirt",
    image: "1",
  },
  {
    name: "Red shirt",
    image: "1",
  },
  {
    name: "Women Top",
    image: "6",
  },
  {
    name: "Women Shorts",
    image: "5",
  },
];
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
