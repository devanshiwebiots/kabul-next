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

export interface CleaveOptions {
  numeral?: boolean | undefined;
  numeralDecimalMark?: string | undefined;
  numeralDecimalScale?: number | undefined;
  numeralIntegerScale?: number | undefined;
  numeralPositiveOnly?: boolean | undefined;
  numeralThousandsGroupStyle?: NumeralThousandsGroupStyleType | undefined;
  stripLeadingZeroes?: boolean | undefined;
  tailPrefix?: boolean | undefined;

  //Extra Options
  blocks?: readonly number[] | undefined;
  copyDelimiter?: boolean | undefined;
  delimiter?: string | undefined;
  delimiters?: readonly string[] | undefined;
  delimiterLazyShow?: boolean | undefined;
  initValue?: any;
  lowercase?: boolean | undefined;
  numericOnly?: boolean | undefined;
  prefix?: string | undefined;
  noImmediatePrefix?: boolean | undefined;
  rawValueTrimPrefix?: boolean | undefined;
  uppercase?: boolean | undefined;
  onValueChanged?(event: any): void;
}

// // Extra Options
// export interface CleaveOptions {
//   blocks?: readonly number[] | undefined;
//   copyDelimiter?: boolean | undefined;
//   delimiter?: string | undefined;
//   delimiters?: readonly string[] | undefined;
//   delimiterLazyShow?: boolean | undefined;
//   initValue?: any;
//   lowercase?: boolean | undefined;
//   numericOnly?: boolean | undefined;
//   prefix?: string | undefined;
//   noImmediatePrefix?: boolean | undefined;
//   rawValueTrimPrefix?: boolean | undefined;
//   uppercase?: boolean | undefined;
//   onValueChanged?(event: any): void;
// }

export interface CleaveInputType {
  className: string;
  options: CleaveOptions;
  placeholder: string;
}