import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BreadcrumbAlert, BreadcrumbHome, BreadcrumbUiKits, DefaultBreadcrumbs, Href } from "@/Constant";
import { BreadcrubmData } from "@/Data/BonusUi/Breadcrumb";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const DefaultBreadcrumb = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={DefaultBreadcrumbs} span={BreadcrubmData} />
        <CardBody>
          <Breadcrumb>
            <BreadcrumbItem><Link href={Href}>{BreadcrumbHome}</Link></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0">
            <BreadcrumbItem><Link href={Href}>{BreadcrumbHome}</Link></BreadcrumbItem>
            <BreadcrumbItem><Link href={Href}>{BreadcrumbUiKits}</Link></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbAlert}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultBreadcrumb;
