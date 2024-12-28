import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { IconInHeadings, ImagePath } from "@/Constant";
import { IconInHeadingData } from "@/Data/BonusUi/BasicCard";
import { Card, CardBody, Col } from "reactstrap";

const IconInHeading = () => {
  const LibraryIcon = () => {
    return <i className="icofont icofont-library me-2"></i>;
  };

  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={IconInHeadings} span={IconInHeadingData} icon={<LibraryIcon />} />
        <CardBody>
          <div className="d-flex gap-3 align-items-center list-behavior-1">
            <div className="flex-shrink-0"><RatioImage className="tab-img" src={`${ImagePath}/blog/img.png`} alt="home" /></div>
            <div className="flex-grow-1 ms-0">
              <p className="mb-xl-0 mb-sm-4">We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInHeading;
