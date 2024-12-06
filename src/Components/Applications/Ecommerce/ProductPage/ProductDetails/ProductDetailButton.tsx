import { ProductDetailsButton } from "@/Data/Ecommerce";
import { Button } from "reactstrap";

const ProductDetailButton = () => {

  return (
    <div className="m-t-15 btn-showcase">
      {ProductDetailsButton?.map((button, index) => (
        <Button key={index} tag="a" color={button.color} href={button.href}>
          <i className={`fa fa-${button.icon} me-1`}></i>
          {button.label}
        </Button>
      ))}
    </div>
  );
};

export default ProductDetailButton;
