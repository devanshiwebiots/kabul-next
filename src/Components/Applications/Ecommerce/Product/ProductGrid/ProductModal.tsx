import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ProductItemInterface, ProductModalInterfaceType } from "@/Types/Ecommerce";
import { useEffect, useState } from "react";
import { Button, Col, Modal, ModalHeader, Row } from "reactstrap";
import ModalProductDetails from "./ModalProductDetails";
import ModalQuantity from "./ModalQuantity";
import ModalButtons from "./ModalButtons";
import RatioImage from "@/CommonComponents/RatioImage";

const ProductModal: React.FC<ProductModalInterfaceType> = ({ value, setOpenModal, dataId }) => {
  const [open, setOpen] = useState(value);
  const { productItem } = useAppSelector((state) => state.product);
  const [quantity, setQuantity] = useState<number>(1);
  const [singleProduct, setSingleProduct] = useState<ProductItemInterface>();

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataId) setSingleProduct(product);
    });
  }, [productItem, dataId]);

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };

  return (
    <Modal centered size="lg" className="product-box" isOpen={open} toggle={onCloseModal} >
      <ModalHeader>
        <Button close onClick={onCloseModal}></Button>
        <Row className="product-box">
          <Col lg={6} className="product-img">
            <RatioImage className="img-fluid" src={`${ImagePath}/ecommerce/${singleProduct?.image}`} alt="image" />
          </Col>
          <Col lg={6} className="product-details text-start p-1">
            {singleProduct && <ModalProductDetails singleProduct={singleProduct} />}
            <div className="product-qnty">
              <ModalQuantity quantity={quantity} setQuantity={setQuantity} />
              {singleProduct && <ModalButtons singleProduct={singleProduct} quantity={quantity} />}
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  );
};
export default ProductModal;
