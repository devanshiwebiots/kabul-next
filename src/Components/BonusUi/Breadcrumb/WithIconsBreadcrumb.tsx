import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { WithIconsBreadcrumbs, Href, BreadcrumbBonusUi, Breadcrumbs } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithIconBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";
import Link from "next/link";

const WithIconsBreadcrumb = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={WithIconsBreadcrumbs} span={WithIconBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem><Link href={Href}><i className="fa fa-home"></i></Link></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem><Link href={Href}><i className="fa fa-home"></i></Link></BreadcrumbItem>
            <BreadcrumbItem><Link href={Href}>{BreadcrumbBonusUi}</Link></BreadcrumbItem>
            <BreadcrumbItem active>{Breadcrumbs}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb