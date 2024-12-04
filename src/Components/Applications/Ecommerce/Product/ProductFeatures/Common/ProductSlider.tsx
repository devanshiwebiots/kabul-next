import { Col, Row } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { CommonProductSlideProp } from "@/Types/Ecommerce";
import { ImagePath } from "@/Constant";
import Image from "next/image";

const ProductSlider: React.FC<CommonProductSlideProp> = ({ data }) => {

  return (
    <Row className={`product-box align-items-center my-3 ${data.rowClass ? data.rowClass : ""}`}>
      <Col md={5} className="product-img">
        <Image height={100} width={100} priority className="img-fluid rounded-3" src={`${ImagePath}/ecommerce/${data.image}.jpg`} alt="" />
      </Col>
      <Col md={7} className="product-details text-start p-0 py-3">
        <span>
          <Rating fillColor="#ffa800" initialValue={Math.random() * 5} size={17} />
        </span>
        <p className="mb-0">{data.title}</p>
        <div className="product-price">${data.text}</div>
      </Col>
    </Row>
  );
};

export default ProductSlider;