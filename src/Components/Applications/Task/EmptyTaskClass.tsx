import { Printer } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Href, ImagePath, Print } from "@/Constant";
import { EmptyTaskClassProp } from "@/Types/Task";
import Link from "next/link";

const EmptyTaskClass: React.FC<EmptyTaskClassProp> = ({ title }) => {
  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h5 className='mb-0'>{title}</h5>
        <Link href={Href}>
          <Printer className='me-2' />
          {Print}
        </Link>
      </CardHeader>
      <CardBody>
        <div className='details-bookmark text-center'>
          <div className='no-favourite'>
            <span>No Task Due Today</span>
          </div>
          <Col sm='12'>
            <div>
              <div className='search-not-found text-center p-5'>
                <img className='img-100 mb-4' src={`${ImagePath}/other-images/sad.png`} alt='' />
                <p>{`Sorry, Not Found Any Task`}</p>
              </div>
            </div>
          </Col>
        </div>
      </CardBody>
    </Card>
  );
};
export default EmptyTaskClass;
