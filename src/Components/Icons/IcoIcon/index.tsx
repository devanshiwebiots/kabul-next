"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IcoIconData } from "@/Data/Icons";
import { useCallback, useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import IconMarkUp from "../Common/IconMarkUp";

const IcoIconContainer = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const getITag = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <Container fluid>
        {IcoIconData?.map((item, i) => {
          return (
            <Row key={i}>
              <Col sm={12}>
                <Card>
                  <CommonCardHeader title={item.title} />
                  <CardBody>
                    <Row className="icon-lists">
                      {item.icons.map((item, i) => {
                        return (
                          <Col sm={6} xs={12} lg={4} key={i} onClick={() => getITag(item)}>
                            <i className={`icofont icofont-${item}`}></i> {item}
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

export default IcoIconContainer;
