export interface RootLayoutProps {
    children: React.ReactNode;
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
  export interface SearchSuggestionItem {
    icon: string | undefined;
    title: string;
    url: string;
    id?: number;
    bookmarked?: boolean;
  }
  export interface SearchSuggestionListType {
    searchedArray: SearchSuggestionItem[];
    setSearchedWord: (key: string) => void;
  }
  export interface BookmarkedDataType {
    icon: string;
    url: string;
    title: string;
    color?: string
    id?: number;
    bookmarked?: boolean;
}

export interface BookmarkSliceType {
    linkItemsArray: BookmarkedDataType[] | [];
    bookmarkedData: BookmarkedDataType[];
}