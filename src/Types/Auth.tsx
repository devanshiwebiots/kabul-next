import { ChangeEvent } from "react";

export interface SignupSubmitProp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface FormValueInterFace {
  firstName: string;
  lastName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  age: string;
  passPort: string;
  country: string;
  state: string;
  city: string;
}

export interface RegisterWizardForm {
  getUserData: (event: ChangeEvent<HTMLInputElement>) => void;
  formValue: FormValueInterFace;
}

export interface RegisterWizardButtonProp {
  showFinish: boolean;
  level: number;
  handleBackButton: VoidFunction;
  handleNextButton: VoidFunction;
  formValue: FormValueInterFace;
}

export interface RegisterWizardListProp {
  level: number;
}