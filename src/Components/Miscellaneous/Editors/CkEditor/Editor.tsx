import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CKEditorExample } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { content } from "@/Data/Miscellaneous/Editors";

const Editor = () => {
  
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={CKEditorExample} />
        <CardBody>
          <CKEditor editor={ClassicEditor} data={content} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Editor;