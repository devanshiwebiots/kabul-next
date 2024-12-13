import { Printer } from "react-feather";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Href, ImagePath, Print } from "@/Constant";
import { EmptyTaskClassProp } from "@/Types/Task";
import Link from "next/link";

const EmptyTaskClass: React.FC<EmptyTaskClassProp> = ({ title }) => {
  return (
    <Card className='mb-0'>
      <CardHeader className='d-flex'>
        <h4 className='mb-0'>{title}</h4>
        <Link href={Href}>
          <Printer className='me-2' />
          {Print}
        </Link>
      </CardHeader>
      <CardBody>
        <div className='details-bookmark text-center'>
          <div className='no-favourite'>
            <span>No task due today.</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EmptyTaskClass;
