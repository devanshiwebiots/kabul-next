import { Card, CardBody, Col, Row } from "reactstrap";
import UnorderLists from "./UnorderLists";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ListingTypography } from "@/Constant";
import { ListingData } from "@/Data/UiKits/Typography";
import Orderlist from "./OrderList";
import DescriptionList from "./DescriptionList";

const ListingCard = () => {
  return (
    <Col sm={12} className="listing">
      <Card>
        <CommonCardHeader title={ListingTypography} span={ListingData} tagClass="mb-0" />
        <CardBody>
          <Row className="g-3">
            <UnorderLists />
            <Orderlist />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingCard;
