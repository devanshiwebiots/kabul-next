import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { VariationOfBreadcrumbs, Href, BreadcrumbHome, BreadcrumbTable, BreadcrumbBootstrapTable } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VariationOfBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";
import Link from "next/link";

const VariationOfBreadcrumb = () => {
  return (
    <Col md={6}>
      <Card className="height-equal">
        <CommonCardHeader title={VariationOfBreadcrumbs} span={VariationOfBreadcrumbData} />
        <CardBody className="breadcrumb-space">
          <Breadcrumb className="breadcrumb-no-divider mb-0 gap-2">
            <BreadcrumbItem className="mb-1 mb-xl-0 me-1"><Link href={Href}>{BreadcrumbHome} -&gt;</Link></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><Link href={Href}>{BreadcrumbTable} -&gt;</Link></BreadcrumbItem>
            <BreadcrumbItem className="ps-0 mb-1 mb-xl-0 me-1"><Link href={Href}>{BreadcrumbBootstrapTable} -&gt;</Link></BreadcrumbItem>
            <BreadcrumbItem active className="ps-0">Basic Tables</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default VariationOfBreadcrumb