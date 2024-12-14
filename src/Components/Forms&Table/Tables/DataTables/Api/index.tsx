"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion";
import CustomFiltering from "./CustomFiltering"; 

const ApiContainer = () => {
  return (
    <Container fluid>
      <Row>
          <AddRows/>
          <ChildRows/>
          <RowSelectionAndDeletion/>
          <CustomFiltering/>
      </Row>
    </Container>
  );
};

export default ApiContainer;
