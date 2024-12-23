import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ActiveData, ActiveListData } from "@/Data/UiKits/Lists";
import { ActiveList } from "@/Constant";

const ActiveLists = () => {
  return (
    <Col xl={4} md={6}>
      <Card>
        <CommonCardHeader title={ActiveList} span={ActiveData} />
        <CardBody>
          <ListGroup>
            {ActiveListData?.map((item, index) => (
              <ListGroupItem key={index} className={index === 0 ? "active" : ""}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;
