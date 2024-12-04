import { useAppDispatch } from "@/Redux/Hooks";
import { setColView, setListView } from "@/Redux/Reducer/FilterSlice";
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
        <div className="icon-grid grid-layout-view" onClick={gridLayout}>
          <Grid />
        </div>
      </div>
      <div className="square-product-setting d-inline-block">
        <div className="icon-grid m-0 list-layout-view" onClick={listLayout}>
          <List />
        </div>
      </div>
    </>
  );
};

export default GridAndListView;
