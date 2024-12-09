"use client";
import { useCallback, useState } from "react";
import { Search } from "react-feather";
import { Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import SearchTabs from "./SearchTabs";
import SearchTabContent from "./SearchTabContent";

const SearchResultContainer = () => {
  const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);

  return (
    <Container fluid className='search-page'>
      <Row>
        <Col sm={12}>
          <Card>
            <CardHeader>
              <Form className="theme-form">
                <InputGroup className=" m-0 flex-nowrap">
                  <Input className="form-control-plaintext" type="search" placeholder="Search...." />
                  <InputGroupText className="btn btn-primary"><Search /></InputGroupText>
                </InputGroup>
              </Form>
            </CardHeader>
            <CardBody>
              <SearchTabs callbackActive={callback} activeTabValue={1} />
              <SearchTabContent activeTab={activeTab} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResultContainer;
