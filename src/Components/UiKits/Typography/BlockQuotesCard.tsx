import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Blockquotes } from "@/Constant";
import { BlockquoteData, BlockquotesData } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const BlockQuotesCard = () => {
  return (
    <Col sm={12}>
      <Card className="overflow-hidden">
        <CommonCardHeader title={Blockquotes} span={BlockquotesData} />
        <CardBody>
           {BlockquoteData?.map(({ text, name, className }, index) => (
                  <div className={`figure text-${className} d-block dark-blockquote`} key={index}>
                    <blockquote className="blockquote light-card mb-2">
                      <p className="mb-0 txt-dark">{text}</p>
                      <span className="blockquote-footer pt-3">{name}</span>
                    </blockquote>
                  </div>
                ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuotesCard;
