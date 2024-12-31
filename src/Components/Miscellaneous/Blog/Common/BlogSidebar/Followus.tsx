import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FollowUs } from "@/Constant";
import { FollowUsData } from "@/Data/Miscellaneous/Blog";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const Followus = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={FollowUs} />
        <CardBody>
          <ul className='blog-follow'>
            {FollowUsData?.map((item, index) => (
              <li key={index}>
                <Link href={item.url} target='_blank'>
                  <i className={`fa fa-${item.icon}`}></i>
                </Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Followus;
