import { Href } from "@/Constant";
import { TaskData } from "@/Data/Task";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActiveTab } from "@/Redux/Reducer/TaskSlice";
import { NavClassType } from "@/Types/Task";
import Link from "next/link";
import { NavItem } from "reactstrap";

const TaskViewData: React.FC<NavClassType> = ({ activeToggle }) => {
  const { activeTab } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tabHandler = (tab: string) => {
    dispatch(setActiveTab(tab));
    activeToggle(tab);
  };

  return (
    <>
      {TaskData?.map((item, index) => (
        <NavItem key={index}>
          <Link href={Href} className={activeTab === item.activeTab ? "active" : ""} onClick={() => tabHandler(item.activeTab)}>
            <span className="title">{item.title}</span>
          </Link>
        </NavItem>
      ))}
    </>
  );
};

export default TaskViewData;
