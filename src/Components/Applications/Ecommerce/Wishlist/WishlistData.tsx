import { Href, ImagePath, MoveToCart } from "@/Constant";
import { WhishListProduct } from "@/Data/Ecommerce";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Badge, Col, Row } from "reactstrap";

export const WishlistData = () => {

  return (
    <Row className="g-sm-4 g-3">
      {WhishListProduct?.map((item, index) => (
        <Col xl={4} md={6} key={index}>
          <div className="prooduct-details-box">
            <div className="d-flex">
              <Image height={60} width={60} priority className="align-self-center img-fluid" src={`${ImagePath}/ecommerce/product-table-${item.image}.png`} alt="#" />
              <div className="flex-grow-1 ms-3">
                <div className="product-name">
                  <h6><Link href={Href}>{item.name}</Link></h6>
                </div>
                <Rating initialValue={5} size={17} />
                <div className="price d-flex border-0 p-0">
                  <div className="text-muted me-2">Price</div> : 210$</div>
                <div className="avaiabilty">
                  <div className="text-success">In stock</div>
                </div>
                <div>
                  <Badge color="light-primary" className="txt-primary">
                    {MoveToCart}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
