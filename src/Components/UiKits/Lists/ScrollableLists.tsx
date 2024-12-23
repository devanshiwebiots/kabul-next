import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { Href, ImagePath, ScrollableList } from "@/Constant";
import { ScrollableData, ScrollableDataList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ScrollableLists = () => {
  return (
    <Col xxl={4}>
      <Card>
        <CommonCardHeader title={ScrollableList} span={ScrollableData} />
        <CardBody>
          <ListGroup className="main-lists-content scrollbar-wrapper custom-scrollbar">
            {ScrollableDataList?.map(({ src, title, mail, days }, index) => (
              <ListGroupItem tag="a" className={`list-group-item-action ${index === 0 ? "bg-primary active" : "list-hover-primary"}`} href={Href} key={index}>
                <div className="list-wrapper gap-0">
                  <RatioImage className="list-img" src={`${ImagePath}/user/${src}`} alt="profile" />
                  <div className="list-content">
                    <h4 className={`${index === 0 ? "text-white" : ""}`}>{title}</h4>
                    <p>{mail}</p>
                    <small className={`${index === 0 ? "text-white" : "text-muted"}`}>{days} days ago</small>
                  </div>
                </div>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableLists;
