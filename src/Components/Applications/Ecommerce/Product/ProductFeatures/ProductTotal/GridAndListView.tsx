import { Href } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setColView, setListView } from "@/Redux/Reducer/FilterSlice";
import Link from "next/link";
import { Grid, List } from "react-feather";

const GridAndListView = () => {
  const dispatch = useAppDispatch();

  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  const listLayout = () => dispatch(setListView(true));

  return (
    <>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid grid-layout-view" href={Href} onClick={gridLayout}>
          <Grid />
        </Link>
      </div>
      <div className="square-product-setting d-inline-block">
        <Link className="icon-grid m-0 list-layout-view" href={Href} onClick={listLayout}>
          <List />
        </Link>
      </div>
    </>
  );
};

export default GridAndListView;
