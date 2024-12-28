import { Href, ImagePath, PrimaryBorderState } from "@/Constant";
import { BorderPrimaryData, BorderPrimaryStateData } from "@/Data/BonusUi/CreativeCard";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderPrimaryState = () => {

 
  return (
    <Col xxl={4} md={6}>
      <Card className="height-equal">
        <CommonCreativeCardHeader headerClass="border-l-primary border-3" title={PrimaryBorderState} span={BorderPrimaryData} />
        <CardBody>
          <ListGroup>
            {BorderPrimaryStateData?.map((item,index)=>(
               <ListGroupItem tag="a" key={index} className={`list-group-item-action ${item.active ? "active" : ""}`} href={Href}><Image height={40} width={40} priority className="rounded-circle" src={`${ImagePath}/user/${item.src}.jpg`} alt="user" />{item.name}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderPrimaryState;
