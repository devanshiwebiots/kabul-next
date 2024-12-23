import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalList } from "@/Constant";
import { HorizontalData, HorizontalListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const HorizontalLists = () => {
  return (
    <Col xl={6} sm={12} className="box-col-6">
      <Card className="height-equal">
        <CommonCardHeader title={HorizontalList} span={HorizontalData} />
        <CardBody>
          <div className="horizontal-list-wrapper dark-list">
            {HorizontalListData?.map(({ item, color }, index) => (
              <ListGroup className="fw-bold list-group-horizontal-sm pb-2" key={index}>
                {item?.map((data, index) => (
                  <ListGroupItem className={`border-left-${index === 0 ? `${color}` : ""}`} key={index}>{data}</ListGroupItem>
                ))}
              </ListGroup>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalLists;