import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultList } from "@/Constant";
import { DefaultData, DefaultListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col xl={4} md={6}>
      <Card>
        <CommonCardHeader title={DefaultList} span={DefaultData} />
        <CardBody>
          <ListGroup>
            {DefaultListData?.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
