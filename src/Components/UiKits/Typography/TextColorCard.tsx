import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TextColor } from "@/Constant";
import { TextColorData, TextDataColor } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const TextColorCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={TextColor} span={TextColorData} tagClass="mb-0"/>
        <CardBody>
          <div className="d-flex flex-column gap-2">
            {TextDataColor?.map(({ title, code }, index) => (
              <p className={`txt-${code} mb-0`} key={index}>{`This is ${title} text You can achieve this adding`}<code> .{code} </code>class</p>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorCard;
