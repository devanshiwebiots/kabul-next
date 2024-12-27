import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlignmentDataList, AlignmentPaginationData } from "@/Data/BonusUi/Pagination";
import { Pagination, PaginationItem, PaginationLink, Card, CardBody, Col } from "reactstrap";
import { Href, Next, Previous, PaginationAlignments } from "@/Constant";

const PaginationAlignment = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={PaginationAlignments} span={AlignmentPaginationData} />
        <CardBody>
          {AlignmentDataList?.map(({ className, color, text }, index) => (
            <Pagination className={`pagination ${className} pagin-border-${color} pagination-${color}`} aria-label="Page navigation example" key={index}>
              <PaginationItem><PaginationLink href={Href} previous>{Previous}</PaginationLink></PaginationItem>
              {
                text?.map((item, i) => (
                  <PaginationItem key={i} active={item.active}><PaginationLink href={Href}>{item.type}</PaginationLink></PaginationItem>
                ))
              }
              <PaginationItem><PaginationLink href={Href} next>{Next}</PaginationLink></PaginationItem>
            </Pagination>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignment;
