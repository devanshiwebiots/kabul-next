import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { SecondaryBorderState } from "@/Constant";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";
import { BorderSeconadaryData, BorderSecondaryDataList } from "@/Data/BonusUi/CreativeCard";

const BorderSecondaryState = () => {
  return (
    <Col xxl={4} sm={12}>
      <Card className="height-equal">
        <CommonCreativeCardHeader headerClass="border-l-secondary border-3" title={SecondaryBorderState} span={BorderSeconadaryData} />
        <CardBody className="scroll-demo">
          <ListGroup numbered className="scroll-rtl">
            {BorderSecondaryDataList?.map(({ title, color, tag }, index) => (
              <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                <div className="ms-2 me-auto">{title}</div>
                <Badge color={color} pill className="p-2">{tag}</Badge>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderSecondaryState;
