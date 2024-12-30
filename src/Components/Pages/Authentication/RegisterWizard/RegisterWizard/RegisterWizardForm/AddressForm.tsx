import { ConfirmPasswordWizard, ConfirmPasswordWizardPlaceholder, EmailAddressWizardPlaceholder, EnterYourEmailPasswordToLoginWizard, PasswordWizard, PasswordWizardPlaceholder, SignUpToAccount } from "@/Constant";
import { RegisterWizardForm } from "@/Types/Auth";
import { FormGroup, Input, Label } from "reactstrap";

const AddressForm :React.FC<RegisterWizardForm>= ({ formValue, getUserData }) => {
  const { email, password, confirmPassword } = formValue;

  return (
    <div id="step-2" className="content">
      <div className="wizard-title">
        <h2>{SignUpToAccount}</h2>
        <h5 className="text-muted mb-4">{EnterYourEmailPasswordToLoginWizard}</h5>
      </div>
      <div className="login-main">
        <div className="theme-form">
          <FormGroup className="m-t-15">
            <Label htmlFor="exampleFormControlInput1" check>{EmailAddressWizardPlaceholder}</Label>
            <Input onChange={getUserData} value={email} name="email" id="exampleFormControlInput1" type="email" placeholder={EmailAddressWizardPlaceholder} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleInputPassword1" check>{PasswordWizard}</Label>
            <Input onChange={getUserData} value={password} name="password" id="exampleInputPassword1" type="password" placeholder={PasswordWizardPlaceholder} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleInputPassword1" check>{ConfirmPasswordWizard}</Label>
            <Input onChange={getUserData} value={confirmPassword} name="confirmPassword" id="exampleInputcPassword1" type="password" placeholder={ConfirmPasswordWizardPlaceholder} />
          </FormGroup>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
