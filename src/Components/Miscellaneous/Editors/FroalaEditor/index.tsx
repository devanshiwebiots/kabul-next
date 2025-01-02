"use client";
import { Container, Row } from "reactstrap";
import Editor from "./Editor";
import InlineEditor from "./InlineEditor"; 

const FroalaEditorContainer = () => {
  return (
    <Container fluid>
      <Row>
          <Editor/>
          <InlineEditor/>
      </Row>
    </Container>
  );
};

export default FroalaEditorContainer;
