export interface FormSubmitProp {
  modal: VoidFunction;
}

export interface BalanceModalType {
  modalThird: boolean;
  modalThirdToggle: VoidFunction;
}

export interface CommonKabulModalTitleType {
  heading: string;
  subHeading: string;
  text: string;
}

export interface ProfileModalType {
  modalOne: boolean;
  modalOneTogggle: VoidFunction;
}

export interface CommonModalType {
  children?: React.ReactNode;
  size?: string;
  isOpen?: boolean;
  toggle?: VoidFunction;
  title?: string;
  modalBodyClassName?: string;
  modalTitleClassName?: string;
  heading?: string;
  sizeTitle?: string;
  fullTitle?: string;
  staticTitle?: string;
  fullscreen?: true | "sm" | "md" | "lg" | "xl" | "xxl";
  centered?: boolean;
  onClosed?: VoidFunction;
  backdrop?: boolean | "static";
}

export interface CommonFullScreenDataType {
  color: string;
  onClick: VoidFunction;
  title: string;
  fullscreen:true | "sm" | "md" | "lg" | "xl" | "xxl";
  isOpen: boolean;
  toggle: VoidFunction;
}

export interface StaticModalToggleProp {
  staticModalToggle: VoidFunction;
}

export interface ToggleModalType {
  nestedModal?: boolean;
  closeAll?: boolean;
  toggle?: VoidFunction;
  toggleNested?: VoidFunction;
  toggleAll: VoidFunction;
}