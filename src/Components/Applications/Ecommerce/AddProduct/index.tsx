"use client"
import { ProductForm } from "@/Constant";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import LeftSidebar from "./LeftSidebar";
import TabsContent from "./TabsContent";

const AddProductContainer = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <Card>
                        <CardHeader className="pb-0">
                            <h4>{ProductForm}</h4>
                        </CardHeader>
                        <CardBody>
                            <Row className='g-xl-5 g-3'>
                                <LeftSidebar />
                                <TabsContent />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProductContainer;
