import ConfigDB from "@/Config/ThemeConfig";
import { useAppDispatch } from "@/Redux/Hooks";
import CommonUL from "../Common/CommonUL";
import { setLayout } from "@/Redux/Reducer/Layout/ThemeCustomizerSlice";

const Horizontal = () => {
  const dispatch = useAppDispatch();
  const handleLayout = (layoutName: string) => {
    localStorage.setItem("layout", layoutName);
    dispatch(setLayout(layoutName));
    ConfigDB.settings.layout_class = layoutName;
  };
  return (
    <li className={` ${localStorage.getItem("layout") === "compact-wrapper" ? "active" : ""}`} onClick={() => handleLayout("compact-wrapper")}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body'>
        <ul>
          <li className='bg-dark sidebar compact'></li>
          <li className='bg-light body'></li>
        </ul>
      </div>
    </li>
  );
};

export default Horizontal;
