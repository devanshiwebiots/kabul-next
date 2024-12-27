import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { BreadcrumbHome, BreadcrumbProgress, BreadcrumbUiKits, DividerBreadcrumbs, Href } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DividerBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";
import Link from "next/link";

const DividerBreadcrumb = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={DividerBreadcrumbs} span={DividerBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem><Link href={Href}>{BreadcrumbHome}</Link></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon" >
            <BreadcrumbItem><Link href={Href}>{BreadcrumbHome}</Link></BreadcrumbItem>
            <BreadcrumbItem><Link href={Href}>{BreadcrumbUiKits}</Link></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbProgress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DividerBreadcrumb