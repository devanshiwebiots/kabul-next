import { ChangeEvent } from "react";

export interface BusinessFormCommonProps {
  activeTab?: number | undefined;
  callbackActive: (val: number | undefined) => void;
  differentId?: boolean;
}

export interface BusinessFormPropsType {
  horizontalWizardClass?: string;
  heading: string;
  firstXl?: number;
  secondXl?: number;
  xs?: number;
}

export interface BankLogoListProp {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  differentId?: boolean;
}

export interface CustomWizardFormPropsType {
  heading: string;
  horizontalWizardClass?: string;
  xs?: number;
  firstXl?: number;
  secondXl?: number;
  differentId?: boolean;
}