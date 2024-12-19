import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Orders, OrderClass, OrderValueClass } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "./Common/GridCommonCardFooter";
import { OrderData, OrderList } from "@/Data/UiKits/Grid";

const OrderCard = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={Orders} span={OrderData} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            {OrderList?.map(({ extraSmallSize, smallSize, item, order }, index) => (
              <Col xs={extraSmallSize} sm={smallSize && smallSize} className={order} key={index}><span>{item} Item ({order})</span></Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={OrderClass} valueClass={OrderValueClass} />
      </Card>
    </Col>
  );
};

export default OrderCard;
