import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";
import { ImageWithCheckboxDataList } from "@/Data/Forms";
import { Col, Input, Label } from "reactstrap";

const DynamicImagesWithCheckbox = () => {
  return (
    <>
      {ImageWithCheckboxDataList?.map(({ src, label, defaultChecked, disabled, alt }, index) => (
        <Col xxl={3} sm={6} key={index}>
          <div className="card-wrapper border rounded-3 checkbox-checked">
            <h6 className="sub-title">{label} Image</h6>
            <div className="img-checkbox">
              <Input className="main-img-cover" id={`img-check-${src}`} type="checkbox" name="radio6" defaultChecked={defaultChecked} disabled={disabled} />
              <Label className="mb-0" htmlFor={`img-check-${src}`} check>
                <RatioImage src={`${ImagePath}/switch/${src}.jpg`} alt={alt} />
              </Label>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default DynamicImagesWithCheckbox
