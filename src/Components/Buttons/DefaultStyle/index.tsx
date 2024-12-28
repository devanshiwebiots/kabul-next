'use client'
import { ActiveButtonsHeading, BoldBorderOutlineButtonsHeading, DefaultButtonsHeading, DisabledButtonsHeading, EdgeButtonsHeading, FlatButtonHeading, GradientButtonsHeading, OutlineButtonsHeading, SizingButtonsHeading } from "@/Constant";
import { ActiveButtonsData, ActiveButtonsHeadingData, BoldBorderOutlineButtonsData, BoldBorderOutlineButtonsHeadingData, DefaultButtonsData, DefaultButtonsHeadingData, DisabledButtonsData, DisabledButtonsHeadingData, EdgeDefaultButtonsData, EdgeDefaultButtonsHeadingData, FlatButtonsData, FlateButtonsHeadingData, GraddienButtonsHeadingData, GradientButtonsData, OutlineButtonsData, OutlineButtonsHeadingData, SizingButtonsData, SizingButtonsHeadingData } from "@/Data/Buttons/DefaultStyle";
import { Col, Container, Row } from "reactstrap";
import CommonButtons from "../CommonButtons/CommonButtons";

const DefaultStyleContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <CommonButtons commonButtonsData={DefaultButtonsData} title={DefaultButtonsHeading} subTitle={DefaultButtonsHeadingData} />
          <CommonButtons className="btn-square" commonButtonsData={FlatButtonsData} title={FlatButtonHeading} subTitle={FlateButtonsHeadingData} />
          <CommonButtons className="btn-pill btn-air-primary" commonButtonsData={EdgeDefaultButtonsData} title={EdgeButtonsHeading} subTitle={EdgeDefaultButtonsHeadingData} />
          <CommonButtons commonButtonsData={SizingButtonsData} title={SizingButtonsHeading} subTitle={SizingButtonsHeadingData} />
          <CommonButtons commonButtonsData={ActiveButtonsData} title={ActiveButtonsHeading} subTitle={ActiveButtonsHeadingData} />
          <CommonButtons commonButtonsData={DisabledButtonsData} title={DisabledButtonsHeading} subTitle={DisabledButtonsHeadingData} className="text-white" />
          <CommonButtons commonButtonsData={OutlineButtonsData} title={OutlineButtonsHeading} subTitle={OutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={BoldBorderOutlineButtonsData} title={BoldBorderOutlineButtonsHeading} subTitle={BoldBorderOutlineButtonsHeadingData} />
          <CommonButtons commonButtonsData={GradientButtonsData} title={GradientButtonsHeading} subTitle={GraddienButtonsHeadingData} />
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultStyleContainer;
