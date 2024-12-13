import ShowError from "@/CommonComponents/ShowError";
import { BillingInformation, FillFollowingInformation, ProceedToNext } from "@/Constant";
import { BillingFormProp } from "@/Types/Forms";
import { ChangeEvent, useState } from "react";
import { Button, Col, Form } from "reactstrap";
import BillingUserDetail2 from "./BillingUserDetail2";
import BillingUserDetails1 from "./BillingUserDetails1";

const BillingForm: React.FC<BillingFormProp> = ({ callbackActive }) => {
  const [studentValidationForm, setStudentValidationForm] = useState({ firstName: "", lastName: "", contact: "", email: "", address: "", country: "", state: "", zip: "", rememberNextTime: false, otherNotes: "" });
  const { firstName, lastName, contact, email, address, country, state, zip, rememberNextTime, otherNotes } = studentValidationForm;
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "rememberNextTime" ? event.target.checked : event.target.value;
    setStudentValidationForm({ ...studentValidationForm, [name]: value });
  };
  const handleNextButton = () => {
    if (firstName !== "" && lastName !== "" && contact !== "" && email !== "" && address !== "" && country !== "" && state !== "" && zip !== "" && rememberNextTime !== false && otherNotes !== "") {
      callbackActive(2);
    } else {
      ShowError();
    }
  };

  return (
    <>
      <h6>{BillingInformation}</h6>
      <p className="f-light">{FillFollowingInformation}</p>
      <Form onSubmit={(e) => e.preventDefault} className="g-3 needs-validation row" noValidate>
        <BillingUserDetails1 studentValidationForm={studentValidationForm} getUserData={getUserData} />
        <BillingUserDetail2 studentValidationForm={studentValidationForm} getUserData={getUserData} />
        <Col xs={12} className="text-end mt-2">
          <Button onClick={handleNextButton} color="primary">{ProceedToNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
        </Col>
      </Form>
    </>
  );
};

export default BillingForm;
