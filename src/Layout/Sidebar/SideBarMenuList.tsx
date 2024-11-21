import { useAppSelector } from "@/Redux/Hooks";
import { Fragment, useState } from "react";
import { MenuList } from "@/Data/Layout/SidebarMenuList";
import { MenuItem } from "@/Types/Layout";
import SubMenulist from "./SubMenuList";
import { useTranslation } from "react-i18next";

const SidebarMenuList = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItem[]>([]);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const shouldHideMenu = (mainMenu: MenuItem) => { return mainMenu?.Items?.map((data) => data.title).every((titles) => pinedMenu.includes(titles as string)) };
  const { t } = useTranslation("common");

  return (
    <>
      {
        MenuList?.map((mainMenu: MenuItem, index) => (
          <Fragment key={index}>
            <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
              <div>
                <h6 className={mainMenu.lanClass ? mainMenu.lanClass : ""}>{t(mainMenu.title)}</h6>
              </div>
            </li>
            <SubMenulist menu={mainMenu.Items} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
          </Fragment>
        ))}
    </>
  );
};

export default SidebarMenuList;