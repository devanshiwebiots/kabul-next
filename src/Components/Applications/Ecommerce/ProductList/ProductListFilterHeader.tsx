import { AddProduct } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setFilterToggle } from "@/Redux/Reducer/ProductSlice";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { Filter } from "react-feather";

const ProductListFilterHeader = () => {
  const { filterToggle } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="bg-light-primary light-box" onClick={() => dispatch(setFilterToggle())}>      
          <Filter className={`filter-icon ${filterToggle ? "hide" : "show"}`} />
          <i className={`icon-close filter-close ${filterToggle ? "show" : "hide"}`} />
      </div>
      <Link className="btn btn-primary" href={Routes.ECommerce.AddProduct}>
        <i className="fa fa-plus" />
        {AddProduct}
      </Link>
    </div>
  );
};

export default ProductListFilterHeader;
