import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AskOurCommunity, AskQuestion, FaqContactUs, Href, Navigations } from "@/Constant";
import { AskQuestionData } from "@/Data/Miscellaneous/Faq";
import Link from "next/link";
import { Mail, MessageCircle, MessageSquare, Settings } from "react-feather";
import { Button, Card, CardBody, Col } from "reactstrap";

const Navigation = () => {
  return (
    <Col lg={12}>
      <Card className="card-mb-faq">
        <CommonCardHeader title={Navigations} headClass="faq-header pb-0" icon={<Settings />} />
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <Button color="primary" tag="a" href={Href}>
              <MessageSquare className="m-r-10" />
              {AskQuestion}
            </Button>
          </div>
          <div className="navigation-option">
            <ul>
              {AskQuestionData?.map((item, i) => (
                <li className="border-0" key={i}>
                  <Link href={Href}>{item.icon}{item.title}</Link>
                  <span className={item.class}>{item.val}</span>
                </li>
              ))}
            </ul>
            <hr />
            <ul>
              <li className="border-0"><Link href={Href}><Mail />{FaqContactUs}</Link></li>
              <li className="border-0"><Link href={Href}><MessageCircle />{AskOurCommunity}</Link></li>
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Navigation;
