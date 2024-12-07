import { ImagePath, Invoice, Kabul } from "@/Constant";
import Image from "next/image";
import { Col, Row } from "reactstrap";

const Invoice6Header = () => {
  return (
    <div>
      <Row>
        <Col sm={6}>
          <div className="d-flex">
            <div className="media-left">
              <Image height={27} width={80} priority className="media-object for-light" src={`${ImagePath}/logo/logo-1.png`} alt="logo" />
              <Image height={27} width={80} priority className="media-object for-dark" src={`${ImagePath}/logo/logo.png`} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h4 className="media-heading">{Kabul} </h4>
              <p>hello@Kabul.in<br /><span>289-335-6503</span></p>
            </div>
          </div>
        </Col>
        <Col sm={6}>
          <div className="text-md-end text-xs-center">
            <h3>
              {Invoice} #<span className="counter">1069</span>
            </h3>
            <p>Issued: May<span> 27, 2024</span><br /> Payment Due: June <span>27, 2024</span></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Invoice6Header;
