'use client';
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchContactApiData } from "@/Redux/Reducer/ContactSlice";
import { useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import ContactSideBar from "./ContactSideBar";
import TabData from "./TabData";

const ContactsContainer = () => {
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContactApiData());
  }, []);

  const callback = useCallback((tab: string) => {
    setActiveTab(tab);  
  }, []);

  return (
    <Container fluid>
      <div className="email-wrap bookmark-wrap">           
        <Row>
          <Col xl={3} className="box-col-4e">
            <ContactSideBar callback={callback} />
          </Col>
          <Col xl={9} md={12} className="box-col-12">
            <TabData activeTab={activeTab} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactsContainer;
