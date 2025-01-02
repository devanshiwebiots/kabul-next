import { Button, Card, CardBody, Col } from "reactstrap";
import { EditorsText, InlineEditors } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { useState } from "react";
import { LoremText } from "@/Data/Miscellaneous/Editors";
import ReactFroalaEditor from "react-froala-wysiwyg";

const InlineEditor = () => {

  const [editing, setEditing] = useState(false);
  const [editorContent, setEditorContent] = useState(LoremText);
  const showEditor = () => setEditing(!editing);

  const handleModelChange = (newContent: string) => {
    setEditorContent(newContent);
  };

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={InlineEditors} />
        <CardBody>
          {editing ? (
            <>
              <ReactFroalaEditor model={editorContent} onModelChange={handleModelChange} />
              <Button color="light" className="mt-2" onClick={() => setEditing(false)}>Hide</Button>
            </>
          ) : (
            <div onClick={showEditor}>
              <h1>{EditorsText}</h1>
              <p>{LoremText}</p>
            </div>
          )}
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineEditor;