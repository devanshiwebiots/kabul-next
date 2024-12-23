import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath, ScrollableContents } from "@/Constant";
import { ScrollableContentData, ScrollableContentDataList } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import RatioImage from "@/CommonComponents/RatioImage";

const ScrollableContent = () => {
  return (
    <Col xxl={4} md={12}>
      <Card>
        <CommonCardHeader title={ScrollableContents} span={ScrollableContentData} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup className="main-lists-content pt-0">
              {ScrollableContentDataList?.map(({ text, mail, days, src }, index) => (
                <ListGroupItem tag="a" className={`list-group-item-action ${index === 0 ? "active " : ""} list-hover-primary`} href={Href} key={index}>
                  <div className="list-wrapper gap-0">
                    <RatioImage className="list-img" src={`${ImagePath}/user/${src}`} alt="profile" />
                    <div className="list-content">
                      <h4>{text}</h4>
                      <p>{mail}</p>
                      <small className="text-muted">{days} days ago</small>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
