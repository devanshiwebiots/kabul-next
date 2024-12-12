import { Button, Card, CardBody, CardFooter, Col, Form } from "reactstrap";
import RaisedInputField from "./Common/RaisedInputField";
import { RaiseInputStyles, RaisedCancel, RaisedComments, RaisedEmailAddress, RaisedEmailAddressPlaceholder, RaisedPassword, RaisedPasswordPlaceholder, RaisedSelectYourFavoritePixelstrapTheme, RaisedSubmit, SelectTheColorYouLikeBelow } from "@/Constant";
import SelectInput from "../Common/SelectInput";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RaisedColorDataList, RaisedDataList, RaisedInputStyleData } from "@/Data/Forms";

const RaiseInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={RaiseInputStyles} span={RaisedInputStyleData} />
        <Form className="theme-form dark-inputs">
          <CardBody>
            <RaisedInputField inputType="email" label={RaisedEmailAddress} placeholder={RaisedEmailAddressPlaceholder} />
            <RaisedInputField inputType="password" label={RaisedPassword} placeholder={RaisedPasswordPlaceholder} />
            <SelectInput label={RaisedSelectYourFavoritePixelstrapTheme} inputClass="input-air-primary" span={RaisedDataList} />
            <SelectInput label={SelectTheColorYouLikeBelow} inputClass="input-air-primary" span={RaisedColorDataList} multiple/>
            <RaisedInputField inputType="textarea" label={RaisedComments} rows={4} />
          </CardBody>
          <CardFooter className="text-end">
            <Button color="primary" className="me-3">{RaisedSubmit}</Button>
            <Button color="light" type="reset">{RaisedCancel}</Button>
          </CardFooter>
        </Form>
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
