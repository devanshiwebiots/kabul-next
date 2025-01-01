import { Button, Card, CardBody, Col } from "reactstrap";
import { EditorsText, InlineEditors } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import { LoremText } from "@/Data/Miscellaneous/Editors";

const InlineEditor = () => {
  
  const [editing, setEditing] = useState(false);
  const showEditor = () => setEditing(!editing);

  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={InlineEditors} />
        <CardBody>
          {editing ? (
            <>
              <CKEditor editor={ClassicEditor} data={LoremText} />
              <Button color="light" className="mt-2" onClick={() => setEditing(false)}>{`Hide`}</Button>
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