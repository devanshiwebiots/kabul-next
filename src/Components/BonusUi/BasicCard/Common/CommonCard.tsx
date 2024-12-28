import { Card, CardBody, CardFooter, CardHeader, Col } from "reactstrap";
import { KabulTheme } from "@/Constant";
import { CommonCardProp } from "@/Types/BonusUi";

const CommonCard: React.FC<CommonCardProp> = ({ data }) => {
  return (
    <>
      <Col xl={4} sm={data.sm}>
        <Card className="height-equal">
          <CardHeader className={data.headerClass}>
            <h4 className={data.headingClass}>{data.title}</h4>
          </CardHeader>
          <CardBody className={data.bodyClass}>
            <h5 className={`pb-2 ${data.titleclass}`}>{data.text}</h5>
            <p className="mb-0">{data.span}</p>
          </CardBody>
          <CardFooter className={data.footerClass}>
            <h4 className={`mb-0 text-end ${data.footertitleclass}`}>{KabulTheme}</h4>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default CommonCard;
