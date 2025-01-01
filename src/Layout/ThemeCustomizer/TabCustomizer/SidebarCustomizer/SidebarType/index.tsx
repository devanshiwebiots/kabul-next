import { SidebarTypes } from "@/Constant";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

const SidebarType = () => {
  return (
    <div>
      <h6>{SidebarTypes}</h6>
      <ul className="sidebar-type layout-grid">
        <Vertical/>
        <Horizontal />
      </ul>
    </div>
  );
};

export default SidebarType;
