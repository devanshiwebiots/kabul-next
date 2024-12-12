import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { FlatInputStyles, PleaseDoComments, SelectYourFavoriteRomanNumber, SelectYourMultiplePaintings } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlatInputStyleList, FlatInputTypeData, FlateStyleDataList } from "@/Data/Forms";
import SelectInput from "./Common/SelectInput";

const FlatInputStyle = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={FlatInputStyles} span={FlatInputTypeData} />
        <Form className="theme-form dark-inputs">
          <CardBody>            
            <SelectInput label={SelectYourFavoriteRomanNumber} inputClass="btn-square" span={FlatInputStyleList} />
            <SelectInput label={SelectYourMultiplePaintings} inputClass="btn-square" span={FlateStyleDataList} multiple />
            <Row>
              <Col>
                <FormGroup>
                  <Label check>{PleaseDoComments}</Label>
                  <Input type="textarea" className="custom-scrollbar" rows={3}></Input>
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Form>
      </Card>
    </Col>
  );
};

export default FlatInputStyle;
