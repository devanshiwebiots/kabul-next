import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SearchTableButton } from "@/Constant";
import { Card, CardBody, Col, Input } from "reactstrap";

const SearchBlog = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={SearchTableButton}/>
        <CardBody>
          <div className='blog-search'>
            <Input type='text' placeholder='Search here...' />
            <i className='fa fa-search'></i>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}

export default SearchBlog;