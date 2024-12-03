import { Card, CardBody, Col } from "reactstrap";
import { ProductDetail, ProductDetailsTitle } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import ProductColor from "./ProductColor";
import ProductTable from "./ProductTable";
import ProductSocial from "./ProductSocial";
import ProductRating from "./ProductRating";
import ProductDetailButton from "./ProductDetailButton";

const ProductDetails = () => {

  const { symbol } = useAppSelector((state) => state.product);

  return (
    <Col xxl={5} className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h3 className="f-w-600">{ProductDetailsTitle}</h3>
          </div>
          <div className="product-price">
            {symbol}26.00<del>{symbol}350.00</del>
          </div>
          <ProductColor />
          <p>{ProductDetail}</p>
          <hr />
          <ProductTable />
          <ProductSocial />
          <ProductRating />
          <ProductDetailButton />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductDetails;
