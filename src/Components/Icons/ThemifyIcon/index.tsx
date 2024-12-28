"use client";
import { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { ThemifyIconData } from "@/Data/Icons";
import IconMarkUp from "../Common/IconMarkUp";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const ThemifyIconContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="' + tag + '"></i>',
    });
    setIcon({
      icon: "" + tag + " fa-2x",
    });
  }, []);

  return (
    <>
      <Container fluid>
        {ThemifyIconData?.map((item, i) => {
          return (
            <Row key={i}>
              <Col sm={12}>
                <Card>
                  <CommonCardHeader title={item.title} />
                  <CardBody>
                    <Row className="icon-lists">
                      {item.data.map((icon, i) => {
                        return (
                          <Col sm={6} lg={4} key={i} onClick={() => getITag(icon)}>
                            <i className={`${icon}`}></i> {icon}
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

export default ThemifyIconContainer;
