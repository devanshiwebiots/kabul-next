"use client";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SupportTicketList } from "@/Constant";
import { SupportData } from "@/Data/Miscellaneous/SupportTicket";
import TicketList from "@/Components/Miscellaneous/SupportTicket/TicketList";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketTable from "./TicketTable"; 

const SupportTicketContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonCardHeader title={SupportTicketList} span={SupportData}  />
            <CardBody>
                <TicketList/>
                <TicketTable/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
