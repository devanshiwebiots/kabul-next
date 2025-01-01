import ConfigDB from "@/Config/ThemeConfig";
import { useAppDispatch } from "@/Redux/Hooks";
import CommonUL from "../Common/CommonUL";
import { setLayout } from "@/Redux/Reducer/Layout/ThemeCustomizerSlice";

const Vertical = () => {
  const dispatch = useAppDispatch();
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout", layoutName);
    dispatch(setLayout(layoutName));
    ConfigDB.settings.layout_class = layoutName;
  };
  return (
    <li data-attr='normal-sidebar' className={` ${localStorage.getItem("layout") === "horizontal-wrapper" ? "active" : ""}`} onClick={() => handleLayout("horizontal-wrapper")}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body'>
        <ul>
          <li className='bg-dark sidebar'></li>
          <li className='bg-light body'></li>
        </ul>
      </div>
    </li>
  );
};

export default Vertical;
