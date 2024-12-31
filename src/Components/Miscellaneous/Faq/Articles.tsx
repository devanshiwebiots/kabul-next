import { ArticleData } from "@/Data/Miscellaneous/Faq";
import { Card, CardBody, Col  } from "reactstrap";

const Articles = () => {
  return (
    <>
      {ArticleData?.map((item,index) => (
        <Col xl={4} sm={item.sm} className={`box-col-${item.box}`} key={index}>
          <Card className="bg-primary articles-cards">
            <CardBody> 
            <div className="d-flex faq-widgets align-items-center">
                <div className="flex-grow-1">
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default Articles;