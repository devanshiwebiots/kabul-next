import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { CustomContentList, Href, ImagePath } from "@/Constant";
import { CustomData, CustomList } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const CustomContentLists = () => {
  return (
    <Col md={12}>
      <Card className="custom-card-lists">
        <CommonCardHeader title={CustomContentList} span={CustomData} />
        <CardBody>
          <ListGroup className="main-lists-content pt-0">
            {CustomList?.map(({ src, title, mail, days, text, smallText }, index) => (
              <ListGroupItem tag="a" href={Href} className={`list-group-item-action ${index === 0 ? "active bg-primary" : "list-hover-primary"}`} key={index}>
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <div className="list-wrapper">
                    <RatioImage className="list-img" src={`${ImagePath}/user/${src}`} alt="profile" />
                    <div className="list-content">
                      <h4 className={`${index === 0 ? "text-white" : ""}`}>{title}</h4>
                      <p>{mail}</p>
                    </div>
                  </div>
                  <small>{days}</small>
                </div>
                <p className="mb-1">{text}</p>
                <small className={`${index === 0 ? "text-white" : "text-muted"}`}>{smallText}</small>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomContentLists;
