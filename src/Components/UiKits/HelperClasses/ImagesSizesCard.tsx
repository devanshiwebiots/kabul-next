import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, ImagesSizes } from "@/Constant";
import { ImageDatas, ImagesDetails } from "@/Data/UiKits/HelperClasses";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const ImagesSizesCard = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal" style={{minHeight:"305px"}}>
        <CommonCardHeader title={ImagesSizes} span={ImageDatas} />
        <CardBody>
          <div className="gradient-border gap-3">
            {ImagesDetails?.map((item, index) => (
              <Image height={item} width={item} priority className={`img-${item} img-h-${item}`} src={`${ImagePath}/blog/comment.jpg`} alt={`img-size-${item}`} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesSizesCard;
