import { Badge, Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import ScrollBar from "react-perfect-scrollbar";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BadgesScrollbars } from "@/Constant";
import { BadgeScroll, BadgeScrollList } from "@/Data/BonusUi/Scrollable";

const BadgesScrollbar = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={BadgesScrollbars} span={BadgeScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo" style={{ width: "100%", height: "250px" }}>
            <ListGroup className="list-group list-group-numbered scroll-rtl">
              {BadgeScrollList?.map(({ title, color, text }, index) => (
                <ListGroupItem className="d-flex align-items-start flex-wrap" key={index}>
                  <div className="ms-2 me-auto">{title}</div>
                  <Badge color={color} pill className="p-2">{text}</Badge>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesScrollbar;
