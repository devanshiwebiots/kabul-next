import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, PopularTags } from "@/Constant";
import { Tags } from "@/Data/Miscellaneous/Blog";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";

const PopularTag = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={PopularTags} />
        <CardBody>
          <ul className='tags'>
            {Tags?.map((tag, index) => (
              <li key={index}>
                <Link href={Href}>{tag}</Link>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
}

export default PopularTag;