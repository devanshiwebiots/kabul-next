"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FontAwesomeData } from "@/Data/Icons";
import { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Common/IconMarkUp";

const FontAwsomeContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="fa fa-' + tag + '"></i>',
    });
    setIcon({
      icon: "fa fa-" + tag + " fa-2x",
    });
  }, []);

  return (
    <>
      <Container fluid>
        {FontAwesomeData?.map((icons, index) => {
          return (
            <Row key={index}>
              <Col sm={12}>
                <Card>
                  <CommonCardHeader title={icons.title} />
                  <CardBody>
                    <Row className="icon-lists">
                      {icons.data.map((icon, i) => {
                        return (
                          <Col sm={6} md={4} xl={3} key={i} onClick={() => getITag(icon)}>
                            <i className={`fa fa-${icon}`}></i> fa fa-{icon}
                          </Col>
                        );
                      })}
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Container>
      <IconMarkUp itag={iTag} icons={icon} />
    </>
  );
};

export default FontAwsomeContainer;
