import { ChangeEvent } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { AccountType, Continue } from "@/Constant";
import { BusinessFormCommonProps } from "@/Types/Forms";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { SelectAmountData } from "@/Data/Forms";
import { setAccountType } from "@/Redux/Reducer/FormLayout/FormWizardTwoSlice";
import ShowError from "@/CommonComponents/ShowError";

const SelectAccount: React.FC<BusinessFormCommonProps> = ({ callbackActive }) => {
  const { accountType } = useAppSelector((state) => state.formWizardTwo);
  const dispatch = useAppDispatch();

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setAccountType(value));
  };

  const handleNextButton = () => {
    if (accountType !== "") callbackActive(2);
    else ShowError();
  };

  return (
    <Form className="g-3 needs-validation" noValidate onSubmit={(e) => e.preventDefault()}>
      <Row>
        <Col xs={12} className="mt-2">
          <h5>{AccountType}</h5>
          <p>It has long been known that distracting information on a page will lose a readers attention.</p>
        </Col>
        <Col xs={12} className="mt-2">
          <FormGroup check className="radio radio-primary ps-0 select-account">
            <ul className="radio-wrapper simple-list">
              {SelectAmountData?.map((data, index) => (
                <li key={index}>
                  <Input id={data.title} value={data.title} defaultChecked={data.title === accountType ? true : false} type="radio" name="accountType" onChange={getUserData} />
                  <Label className="mb-0" htmlFor={data.title} check>
                    <i className={`fa fa-${data.iconName}`} />
                    <span className="d-flex flex-column">
                      <span>{data.title}</span>
                      <span>Search your {data.title} information please check it</span>
                    </span>
                  </Label>
                </li>
              ))}
            </ul>
          </FormGroup>
        </Col>
        <Col xs={12} className="text-end mt-3">
          <Button onClick={handleNextButton} color="primary">{Continue}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SelectAccount;