import { CardBody, Col, Input, Label, Row } from "reactstrap";
import { DefaultFileInputExamples, EdgeComments, EdgeDefaultInput, EdgeDefaultInputPlaceholder, EdgeEmailAddress, EdgeEmailAddressPlaceholder, EdgeFemale, EdgeMale, EdgePassword, EdgePasswordPlaceholder, SelectYourFavoritePixelstrapTheme } from "@/Constant";
import EdgeInputField from "./Common/EdgeInputField";
import SelectInput from "../Common/SelectInput";
import { EdgeDataList } from "@/Data/Forms";

const EdgesInputCardBody = () => {
  return (
    <CardBody>
      <EdgeInputField inputType="email" label={EdgeEmailAddress} placeholder={EdgeEmailAddressPlaceholder} />
      <EdgeInputField inputType="password" label={EdgePassword} placeholder={EdgePasswordPlaceholder} />
      <SelectInput label={SelectYourFavoritePixelstrapTheme} span={EdgeDataList} inputClass="btn-pill" />
      <EdgeInputField inputType="file" label={DefaultFileInputExamples} inputClass="px-4" />
      <EdgeInputField inputType="text" label={EdgeDefaultInput} placeholder={EdgeDefaultInputPlaceholder} />
      <Row>
        <Col>
          <div className="mb-3 d-flex gap-3 checkbox-checked">
            <div className="form-check">
              <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
              <Label className=" mb-0" htmlFor="flexRadioDefault1" check>{EdgeMale}</Label>
            </div>
            <div className="form-check">
              <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
              <Label className="mb-0" htmlFor="flexRadioDefault2" check>{EdgeFemale}</Label>
            </div>
          </div>
        </Col>
      </Row>
      <EdgeInputField inputType="textarea" label={EdgeComments} rows={3} />
    </CardBody>
  );
};

export default EdgesInputCardBody;
