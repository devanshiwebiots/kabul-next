import { CleaveOptions } from "cleave.js/options";
import { FormikErrors } from "formik";
import { InputType } from "reactstrap/types/lib/Input";
export interface TooltipValidationProp {
  firstname: string;
  lastname: string;
  username: string;
  city: string;
  state: string;
  zip: string;
}

export interface TooltipFormValidationProp {
  submitErrors: boolean;
  setSubmitError: (key: boolean) => void;
  errors: FormikErrors<TooltipValidationProp>;
}

export interface FormValidationProp {
  firstname: string;
  password: string;
  state: string;
  city: string;
  zip: string;
  payment: string;
  theme: string;
  file: string;
  description: string;
  terms: [];
}

export interface FormValidationsProp {
  submitErrors: boolean;
  setSubmitError: (key: boolean) => void;
  errors: FormikErrors<FormValidationProp>;
}

export interface CommonFloatingFormGruopProp {
  floatingLabel: string;
  inputClass?: string;
  floatClass?: string;
  invalid?: boolean;
  required?: boolean;
}

export interface CommonFloatingInputProp {
  inputType?: InputType;
  label: string;
  floatingLabel: string;
  placeholder?: string;
  defaultValue?: string;
  height?: string;
  invalid?: boolean;
}

export interface CommonFormGroupProp {
  labelClass?: string;
  label: string;
  colSm: number;
  colClass?: string;
  inputType?: InputType;
  placeholder?: string;
  defaultValue?: string;
  inputClass?: string;
  max?: number;
}

export interface CommonSelectInputProp {
  label: string;
  multiple?: boolean;
  inputClass?: string;
  span: string[];
}

export interface CommonEdgeRaisedInputProp {
  inputType: InputType;
  label: string;
  placeholder?: string;
  inputClass?: string;
  rows?: number;
}

export interface CommonFileInputProp {
  label: string;
  multiple?: boolean;
  disabled?: boolean;
  size?: "lg" | "sm";
}

export type NumeralThousandsGroupStyleType = "lakh" | "thousand" | "wan" | "none";
export interface CleaveInputType {
  className?: string;
  options: CleaveOptions;
  placeholder: string;
}