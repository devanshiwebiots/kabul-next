import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StackingToast } from "@/Constant";
import { StackingToastData, StackingToastDataList } from "@/Data/BonusUi/Toasts";
import { Card, CardBody, Col } from "reactstrap";
import CommonToast from "./Common/CommonToast";

const StackingToasts = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={StackingToast} span={StackingToastData} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            {StackingToastDataList?.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StackingToasts;
