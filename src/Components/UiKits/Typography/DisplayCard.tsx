import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisplayHeadings } from "@/Constant";
import { DisplayData } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const DisplayCard = () => {
  return (
    <Col xs={12}>
      <Card>
        <CommonCardHeader title={DisplayHeadings} span={DisplayData} tagClass="mb-0" />
        <CardBody className="d-flex flex-column gap-2">
          {Array.from({ length: 4 }, (_, i) => (
            <h1 key={i} className={`display-${i + 1}`}>
              Display {i + 1}
            </h1>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayCard;
