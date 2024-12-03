import { ProductSliderOne, ProductSliderTwo, Settings } from "@/Data/Ecommerce";
import Slider from "react-slick";
import ProductSlider from "../Common/ProductSlider";

const PriceRange = () => {

  return (
    <div className="product-filter pb-0 new-products">
      <Slider {...Settings}>
        <div className="item">
          {ProductSliderOne?.map((item, index) => (
            <ProductSlider data={item} key={index} />
          ))}
        </div>
        <div className="item">
          {ProductSliderTwo?.map((item, index) => (
            <ProductSlider data={item} key={index} />
          ))}
        </div>
      </Slider>
    </div>
  );
};

export default PriceRange;
