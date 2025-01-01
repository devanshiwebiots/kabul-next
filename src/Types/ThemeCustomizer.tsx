export interface NavCustomizerType {
  callbackNav: (test: string, open: boolean) => void;
  selected: string
}

export interface TabCustomizerType {
  callbackNav: (test: string, open: boolean) => void;
  selected: string
}

export interface SidebarIconProp {
  handleSideBarIconType: (data: string) => void;
  sideBarIconType: string;
};

export interface PropsLightColor {
  primary: string,
  secondary: string
}

export interface MixLayoutComponentProp {
  handleCustomizerMix_Background: (item: string) => void;
  mixLayout: string;
};

export interface LtrDataType {
  handleLayout: (item: string) => void,
  layout_type: string
}
