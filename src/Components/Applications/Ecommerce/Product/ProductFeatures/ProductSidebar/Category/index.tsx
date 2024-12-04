import { Categorys, NewProducts, Price } from "@/Constant";
import GenderFilter from "./GenderFilter";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";
import RangeSlider from "./RangeSlider";

const Category = () => {
  return (
    <>
      <div className="product-filter">
        <h5 className="f-w-600 mb-2">{Categorys}</h5>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0 price-range">
        <h5 className="f-w-600 mb-2">{Price}</h5>
        <RangeSlider />
        <h5 className="f-w-600 mb-2 mt-5">{NewProducts}</h5>
      </div>
    </>
  );
};

export default Category;
