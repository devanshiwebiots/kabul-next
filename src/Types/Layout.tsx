export interface RootLayoutProps {
    children: React.ReactNode;
}export interface SubChildrenType {
    title: string;
    type: string;
    path: string;
}

export interface SidebarChildrenType {
    lanClass?: string;
    path?: string;
    id?: number;
    icon?: string;
    active?: boolean;
    title: string;
    type: string;
    subMenu?: SubChildrenType[];
    bookmark?: boolean;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
}

export interface SidebarItemType {
    id?: number;
    title?: string;
    icon?: string;
    type?: string;
    lanClass?: string;
    active?: boolean;
    path?: string;
    pathName?: string;
    bookmark?: boolean;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
    subMenu?: SidebarChildrenType[];
}

export interface SidebarMenuType {
    id?: number;
    title: string;
    lanClass?: string;
    menucontent?: string;
    menu: SidebarItemType[];
}

export interface MenuItem {
    title: string;
    lanClass?: string;
    Items?: MenuItem[];
    id?: number;
    icon?: string;
    type?: string;
    active?: boolean;
    menu?: MenuItem[];
    url?: string;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
  }

  export interface MenuItem {
    title: string;
    lanClass?: string;
    Items?: MenuItem[];
    id?: number;
    icon?: string;
    type?: string;
    active?: boolean;
    menu?: MenuItem[];
    url?: string;
    badge?: boolean;
    badgeName?: string;
    badgeColor?: string;
  }
  export interface MenuListType {
    menu: MenuItem[] | undefined;
    setActiveMenu: (temp: MenuItem[]) => void;
    activeMenu: any;
    level: number;
  }