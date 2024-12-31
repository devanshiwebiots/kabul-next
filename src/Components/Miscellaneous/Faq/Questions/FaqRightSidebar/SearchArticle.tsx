import { Card, CardBody, CardHeader, Col, Input } from "reactstrap";
import { HelpCircle, Search } from "react-feather";
import { SearchArticles, SearchArticlesPlaceholder } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const SearchArticle = () => {
  return (
    <Col lg={12}>
      <Card className="card-mb-faq xs-mt-search">
        <CommonCardHeader title={SearchArticles} headClass="faq-header pb-0" icon={<HelpCircle />} />
        <CardBody className="faq-body">
          <div className="faq-form">
            <Input type="text" placeholder={SearchArticlesPlaceholder} />
            <Search className="search-icon" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SearchArticle;
