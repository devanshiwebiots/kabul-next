import { Card, CardBody, Col } from "reactstrap";
import { DefaultStyleMegaOptions } from "@/Constant";
import DefaultStyleForm from "./DefaultStyleForm";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MegaOptionDefaultData } from "@/Data/Forms";
import FooterButtons from "../Common/FooterButtons";

const DefaultStyle = () => {
  return (
    <Col sm={12} xxl={6} className='box-col-6'>
      <Card>
        <CommonCardHeader title={DefaultStyleMegaOptions} span={MegaOptionDefaultData} />
        <CardBody className='megaoptions-border-space-sm'>
          <DefaultStyleForm />
        </CardBody>
        <FooterButtons footerClass='text-end' color1='primary' color2='light' />
      </Card>
    </Col>
  );
};

export default DefaultStyle;
