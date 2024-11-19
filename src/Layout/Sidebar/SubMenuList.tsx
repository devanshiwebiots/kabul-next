import { useEffect } from "react";
import SVG from "@/CommonComponents/SVG";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handlePined } from "@/Redux/Reducer/Layout/LayoutSlice";
import { MenuListType, MenuItem } from "@/Types/Layout";
import { Badge } from "reactstrap";
import { useTranslation } from "react-i18next";

const SubMenulist: React.FC<MenuListType> = ({ menu, setActiveMenu, activeMenu, level }) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);

  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { t } = useTranslation("common");

  const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
    return pathname === path ? (active ? active : true) : "";
  };
  const shouldSetActive = ({ item }: { item: MenuItem }): boolean => {
    var returnValue = false;
    if (item?.url === location.pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem: MenuItem) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  };

  useEffect(() => {
    menu?.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
  }, []);

  return (
    <>
      {menu?.map((item, index) => (
        <li key={index} className={`${level === 0 ? "sidebar-list" : ""} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || ""} `}>
          {level === 0 && <i className='fa fa-thumb-tack' onClick={() => dispatch(handlePined(item.title))} />}
          {item.badge ? (
            <Badge color='transparent' className={`badge-${item.badgeColor}`}>
              {item.badgeName}
            </Badge>
          ) : (
            ""
          )}
          <Link
            className={`submenu-title ${level === 0 ? "sidebar-link sidebar-title" : ""}  ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""}`}
            href={item.url ? `${item.url}` : ""}
            onClick={() => {
              const temp = activeMenu;
              temp[level] = temp[level] !== item.title && item.title;
              setActiveMenu([...temp]);
            }}
          >
            {item.icon && <SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType}-${item.icon}`} />}
            {level === 0 ? <span className="lan-3">{t(`${item.title}`)}</span> : t(`${item.title}`)}
            {item.menu && <div className="according-menu">{activeMenu[level] === item.title ? <i className="fa fa-angle-down" /> : <i className="fa fa-angle-right" />}</div>}
          </Link>
          {item.menu && (
            <ul
              className={`${level / 2 === 0 ? "sidebar-submenu" : "nav-sub-childmenu submenu-content"}`}
              style={{
                display: `${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "block" : "none"}`,
              }}
            >
              <SubMenulist menu={item.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};
export default SubMenulist;
