import { Stroke } from "@/Constant";
import CommonUL from "../Common/CommonUL";
import { SidebarIconProp } from "@/Types/ThemeCustomizer";
import { Badge } from "reactstrap";

const StrokeIcon: React.FC<SidebarIconProp> = ({ handleSideBarIconType, sideBarIconType }) => {
  return (
    <li data-attr='stroke-svg' className={`normal-sidebar  ${sideBarIconType === "stroke" ? "active" : ""}`} onClick={() => handleSideBarIconType("stroke")}>
      <div className='header bg-light'>
        <CommonUL />
      </div>
      <div className='body bg-light'>
        <Badge color='primary'>{Stroke}</Badge>
      </div>
    </li>
  );
};

export default StrokeIcon;
