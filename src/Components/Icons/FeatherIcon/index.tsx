"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FeatherIcons } from "@/Constant";
import { FeatherIconsData } from "@/Data/Icons";
import { Key, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Common/IconMarkUp";

const FeatherIconContainer = () => {
  const featherIcons = require("feather-icons");
  const [iTag, setiTag] = useState<string | object>("");
  const [feathericon, setfeatherIcon] = useState<string | object>("");

  const getItag = (tag: string) => {
    setiTag({ iTag: '<i data-feather="' + tag + '"></i>' });
    setfeatherIcon({ feathericon: tag });
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={FeatherIcons} />
            <CardBody>
              <Row className='icon-lists feather-icons'>
                {FeatherIconsData?.map((singleIcon: string, index: Key | null | undefined) => (
                  <Col xs={12} sm={6} xl={4} key={index} onClick={(e) => getItag(singleIcon)}>
                    <div className='d-flex'>
                      <div dangerouslySetInnerHTML={{ __html: featherIcons.icons[singleIcon].toSvg(singleIcon) }} />
                      <div className='flex-grow-1 align-self-center'>
                        <h6 className='mt-0'>{singleIcon}</h6>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <IconMarkUp itag={iTag} icons={feathericon} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatherIconContainer;
