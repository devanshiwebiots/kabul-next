import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProgressWithNumberSteps } from "@/Constant";
import { Col, Card, CardBody, Progress, Button } from "reactstrap";
import { ProgressNumberData, ProgressNumberList } from "@/Data/UiKits/Progress";

const ProgressWithNumberStepsCard = () => {
  return (
    <Col xl={6}>
      <Card className="progress-custom-card">
        <CommonCardHeader title={ProgressWithNumberSteps} span={ProgressNumberData} />
        <CardBody>
          <div className="position-relative m-4 progress-number">
            <Progress className="progress-wrapper" color="primary" value={50} />
            {ProgressNumberList?.map(({ color, number, className }, index) => (
              <Button size="sm" color={color} className={`position-absolute top-0 p-0 ${className} translate-middle rounded-circle`} key={index}>
                {number}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProgressWithNumberStepsCard;