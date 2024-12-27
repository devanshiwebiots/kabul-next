import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicCards } from "@/Constant";
import { BasicCardData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const BasicCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={BasicCards} span={BasicCardData} />
        <CardBody>
          <p className='mb-0'>
            Tabs have long been used to show alternative views of the same group of information tabs in software. Known as
            <em className='txt-danger'>“module tabs”</em>
            , these are still used today in web sites. For instance, airline companies such as Ryanair, easyJet and AirMalta use module tabs to enable the user to switch between bookings for flights, hotels and car hire.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCard;
