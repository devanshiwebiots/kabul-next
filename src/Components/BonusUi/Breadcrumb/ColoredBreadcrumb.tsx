import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredBreadcrumbs, Href } from "@/Constant";
import { ColoredBreadcrumData, ColoredBreadcrumDataList } from "@/Data/BonusUi/Breadcrumb";
import { Fragment } from "react";
import { BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const ColoredBreadcrumb = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={ColoredBreadcrumbs} span={ColoredBreadcrumData} />
        <CardBody>
          {ColoredBreadcrumDataList?.map(({ className, span }, index) => (
            <ol className={`breadcrumb breadcrumb-colored ${className}`} key={index}>
              {span.map(({ title, activeTitle }, index) => (
                <Fragment key={index}>
                  {title && (
                    <BreadcrumbItem><a className="fw-bold" href={Href}>{title}</a></BreadcrumbItem>
                  )}
                  {activeTitle && <BreadcrumbItem active className="fw-bold bg-transparent">{activeTitle}</BreadcrumbItem>}
                </Fragment>
              ))}
            </ol>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBreadcrumb;
