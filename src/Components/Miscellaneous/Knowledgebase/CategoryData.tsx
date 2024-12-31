import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BrowseArticles, Href, KnowledgeArticle } from "@/Constant";
import { KnowledgeBaseData } from "@/Data/Miscellaneous/Knowledgebase";
import Link from "next/link";
import { Archive, ArrowRight, FileText } from "react-feather";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const CategoryData = () => {
  return (
    <Col sm={12}>
      <div className="header-faq">
        <h4 className="mb-0">{KnowledgeArticle}</h4>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={BrowseArticles} headClass="card-no-border pb-0" />
            <CardBody>
              <Row className="browse g-sm-4 g-3">
                {KnowledgeBaseData?.map((data) => (
                  <Col xl={4} md={6} key={data.id} className="xl-50">
                    <div className="browse-articles">
                      <h5><span><Archive className="feather feather-archive" /></span>{data.title}</h5>
                      <ul>
                        {
                          data?.knowledgeList?.map((data, index2) => (
                            <li key={index2} className="border-0">
                              <Link href={Href}>
                                {data.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                                <span>{data.text}</span>
                                {data.badge ? <Badge color="primary" className="pull-right">{data.badge}</Badge> : " "}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default CategoryData;
