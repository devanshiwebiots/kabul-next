import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ListsWithNumber } from "@/Constant";
import { ListNumberData, ListNumberDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithNumbers = () => {
  return (
    <Col xxl={4} sm={12}>
      <Card>
        <CommonCardHeader title={ListsWithNumber} span={ListNumberData} />
        <CardBody>
          <ListGroup numbered>
            {ListNumberDataList?.map(({ color, text }, index) => (
              <ListGroupItem className={`txt-${color} fw-bold`} key={index}>{text}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default ListsWithNumbers;