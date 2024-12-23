import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisabledList, Href, ImagePath } from "@/Constant";
import { DisableList, DisableListData } from "@/Data/UiKits/Lists";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DisabledLists = () => {
  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={DisabledList} span={DisableListData} />
        <CardBody>
          <ListGroup>
            {DisableList?.map(({ text, className, src }, index) => (
              <ListGroupItem tag="a" className={`list-group-item-action ${className ? className : ""}`} key={index} href={Href}>
                <Image height={40} width={40} priority className="rounded-circle" src={`${ImagePath}/user/${src}`} alt="user" />{text}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledLists;