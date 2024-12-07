import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constant";
import { NoDataFoundPropsType } from "@/Types/Contact";
import { Card, CardBody, Col } from "reactstrap";

const NoDataFoundClass: React.FC<NoDataFoundPropsType> = ({ title }) => {
  return (
    <Card className='mb-0'>
      <CommonCardHeader title={title} headClass='d-flex' />
      <CardBody>
        <Col sm='12'>
          <div>
            <div className='search-not-found text-center p-5'>
              <img className='img-100 mb-4' src={`${ImagePath}/other-images/sad.png`} alt='' />
              <p>{`Sorry, Not Found Any Contact`}</p>
            </div>
          </div>
        </Col>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
