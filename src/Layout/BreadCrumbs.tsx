"use client";
import SVG from "@/CommonComponents/SVG";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "react-feather";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const symbolRegex = /[!@#\$%\^&\*\(\)_\+\{\}\[\]:;"'<>,.?/\\|`~\-=]/g;
  const [firstPart, secondPart, thirdPart] = pathname
    .split("/")
    .slice(1)
    .map((item) => item.replace(symbolRegex, " "));

  return (
    <Container fluid>
      <div className='page-title'>
        <Row>
          <Col xs={12} sm={6} className='p-0'>
            <h3 className='text-capitalize'>{thirdPart ? thirdPart : secondPart}</h3>
          </Col>
          <Col xs={12} sm={6} className='p-0'>
            <Breadcrumb className='justify-content-sm-start align-items-center mb-0'>
              <BreadcrumbItem>
                <Link href={Routes.Dashboard.DefaultDashboard}>
                 <Home/>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem className="f-w-400 text-capitalize">{firstPart}</BreadcrumbItem>
              <BreadcrumbItem className={`f-w-400 ${!thirdPart ? "active" : ""}`}>{secondPart}</BreadcrumbItem>
              {thirdPart && <BreadcrumbItem className="f-w-400 active">{thirdPart}</BreadcrumbItem>}
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BreadCrumbs;
