"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlagIcon } from "@/Constant";
import { FlagIconData } from "@/Data/Icons";
import { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Common/IconMarkUp";

const FlagIconsContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = (tag: string) => {
    setITag({
      iTag: '<i className="flag-icon flag-icon-' + tag + '"></i>',
    });
    setIcon({
      icon: "flag-icon flag-icon-" + tag + " fa-2x",
    });
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Card>
              <CommonCardHeader title={FlagIcon} />
              <CardBody>
                <Row className="icon-lists flag-icons">
                  {FlagIconData?.map((icon, index) => (
                    <Col sm={6} xl={4} xs={12} key={index} onClick={() => getITag(icon.abbrivation)}>
                      <div className="d-flex">
                        <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
                        <div className="flex-grow-1">
                          <h5 className="text-uppercase">{icon.abbrivation}</h5>
                          <h6 className="mt-0">{icon.name}</h6>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default FlagIconsContainer;
