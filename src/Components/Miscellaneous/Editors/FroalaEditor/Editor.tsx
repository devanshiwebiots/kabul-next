import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FroalaEditorExample } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { content } from "@/Data/Miscellaneous/Editors";
import { useState } from "react";
import ReactFroalaEditor from "react-froala-wysiwyg";

const Editor = () => {

  const [editorContent, setEditorContent] = useState(content);

  const handleModelChange = (newContent: string) => {
    setEditorContent(newContent);
  };

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={FroalaEditorExample} />
        <CardBody>
          <ReactFroalaEditor model={editorContent} onModelChange={handleModelChange} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Editor;




