import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Form, Row } from "reactstrap";

const Invoice6Footer = () => {
  return (
    <Row>
      <Col md={8}>
        <div>
          <p className="legal">
            <strong>Thank you for your business!</strong>&nbsp; Payment is
            expected within 31 days; please process this invoice within that
            time. There will be a 5% interest charge per month on late invoices.
          </p>
        </div>
      </Col>
      <Col md={4}>
        <Form className="text-end">
          <Image height={32} width={170} priority src={`${ImagePath}/other-images/paypal.png`} alt="PayPal"/>
        </Form>
      </Col>
    </Row>
  );
};

export default Invoice6Footer;
