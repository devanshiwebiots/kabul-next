import { Col, Input, Label } from "reactstrap";
import { BorderedRadios, KabulTheme } from "@/Constant";
import { BorderedRadioData } from "@/Data/Forms";

const BorderedRadio = () => {
  return (
    <Col xl={4} sm={6}>
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <h6 className="sub-title">{BorderedRadios}</h6>
        <div className="form-check radio radio-secondary">
          <Input id="radio22" type="radio" name="radio1" defaultChecked />
          <Label htmlFor="radio22" check>{KabulTheme}</Label>
        </div>
        {BorderedRadioData?.map(({ color, text, id }, index) => (
          <div className={`form-check radio radio-${color}`} key={index}>
            <Input id={`radio${id}`} type="radio" name="radio1" />
            <Label htmlFor={`radio${id}`} check>{text} Theme</Label>
          </div>
        ))}
      </div>
    </Col>
  );
};

export default BorderedRadio;