import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TranslucentToast } from "@/Constant";
import { TranslucentToastData, TranslucentToastDataList } from "@/Data/BonusUi/Toasts";
import { Card, CardBody, Col } from "reactstrap";
import CommonToast from "./Common/CommonToast";

const TranslucentToasts = () => {

  return (
    <Col md={6}>
      <Card className="overflow-hidden bg-dark">
        <CommonCardHeader title={TranslucentToast} span={TranslucentToastData} />
        <CardBody className="toast-rtl bg-dark">
          <div className="toast-container">
            {TranslucentToastDataList?.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TranslucentToasts;
