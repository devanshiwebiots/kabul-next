import { TopBorder } from "@/Constant";
import { BorderTopData } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderTop = () => {
  return (
    <Col sm={12} md={6}>
      <Card className="b-t-0">
        <CommonCreativeCardHeader headerClass="border-t-danger" title={TopBorder} span={BorderTopData} />
        <CardBody>
          <p className="mb-0">Tabs have long been used to show alternative views of the same group of information tabs in software. Known as <em className="txt-danger">“module tabs”</em>, these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderTop;
