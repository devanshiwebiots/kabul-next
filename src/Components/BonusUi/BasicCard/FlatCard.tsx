import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlatCards } from "@/Constant";
import { FlatCardData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const FlatCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card className='b-r-0'>
        <CommonCardHeader title={FlatCards} span={FlatCardData} />
        <CardBody>
          <p className='mb-0'>
            A navigation bar is a particularly important feature because it allows visitors to quickly and easily find
            <em className='txt-danger'>important pages on your website</em>
            , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatCard;
