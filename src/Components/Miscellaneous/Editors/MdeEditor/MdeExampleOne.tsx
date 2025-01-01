import { Card, CardBody, Col, Row } from "reactstrap";
import { MdeEditorExample } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import SimpleMdeReact from "react-simplemde-editor";

const MdeExampleOne = () => {

  return (
    <Row>
      <Col sm={12}>
        <Card>
          <CommonCardHeader title={MdeEditorExample} />
          <CardBody>
            <SimpleMdeReact id="editor_container" value="Enter text in the area on the left. For more info, click the ? (help) icon in the menu." options={{ autofocus: true, spellChecker: false }} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MdeExampleOne;
