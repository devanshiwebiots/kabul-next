import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { ClipboardOnTextareas, Copy, Cut, CutCopyFromTextarea } from "@/Constant";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CopyToClipboard from "react-copy-to-clipboard";
import { clipBoardTextParagraph, notify } from "@/Data/Forms";

const ClipboardOnTextarea = () => {

  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
  
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCardHeader title={ClipboardOnTextareas} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CutCopyFromTextarea}</p>
            <Input className="theme-scrollbar" type="textarea" rows={1} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard me-2" color="warning" onClick={notify}><i className="fa fa-copy me-2"></i>{Copy}</Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
                <Button className="btn-clipboard-cut" color="success"><i className="fa fa-cut me-2"></i>{Cut}</Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextarea;
