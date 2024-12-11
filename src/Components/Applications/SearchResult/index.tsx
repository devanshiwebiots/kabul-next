"use client";
import { useCallback, useState } from "react";
import { Search } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, Input, InputGroup, Row } from "reactstrap";
import SearchTabContent from "./SearchTabContent";
import SearchTabs from "./SearchTabs";

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
                  <Button color="primary"><Search /></Button>
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
