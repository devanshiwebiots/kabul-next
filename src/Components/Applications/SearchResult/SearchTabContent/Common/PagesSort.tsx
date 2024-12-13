import { Col, Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { Href, Next, Previous } from "@/Constant";
import { PagesSortProp } from "@/Types/SearchResult";

const PagesSort :React.FC<PagesSortProp> = ({pageClass}) => {  
  return (
    <Col xs={12} className="m-t-30">
      <div>
        <Nav className={`d-flex justify-content-${pageClass}`}>
          <Pagination className="pagination-primary">
            <PaginationItem disabled><PaginationLink href={Href}>{Previous}</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>1</PaginationLink></PaginationItem>
            <PaginationItem active><PaginationLink href={Href}>2<span className="sr-only">(current)</span></PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href={Href}>{Next}</PaginationLink></PaginationItem>
          </Pagination>
        </Nav>
      </div>
    </Col>
  );
};
export default PagesSort;
