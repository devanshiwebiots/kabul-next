import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationSizings, Previous } from "@/Constant";
import { SizingPaginationData, SizingPaginationDataList } from "@/Data/BonusUi/Pagination";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationSizing = () => {
  return (
    <Col xl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={PaginationSizings} span={SizingPaginationData} />
        <CardBody className="pb-4">
          {SizingPaginationDataList?.map(({ className, size }, index) => (
            <Pagination size={size} className={`pagination-info pagin-border-info ${className}`} aria-label="Page navigation example" key={index}>
              <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href={Href}>2</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
              <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
            </Pagination>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
