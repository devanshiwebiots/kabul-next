import { BottomBorder } from "@/Constant";
import { BorderBottomData } from "@/Data/BonusUi/CreativeCard";
import { Card, CardBody, Col } from "reactstrap";
import CommonCreativeCardHeader from "./Common/CommonCreativeCardHeader";

const BorderBottom = () => {
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCreativeCardHeader headerClass="border-b-info" title={BottomBorder} span={BorderBottomData} />
        <CardBody>
          <p className="mb-0">A navigation bar is a particularly important feature because it allows visitors to quickly and easily find <em className="txt-danger">important pages on your website</em> , like your blog, product pages, pricing, contact info, and documentation. This improves the chances of visitors browsing your site longer, which can boost your page views and reduce your bounce rate.</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderBottom;
