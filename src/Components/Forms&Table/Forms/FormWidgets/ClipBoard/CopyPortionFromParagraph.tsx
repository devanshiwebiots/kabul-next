import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ClipBoardCopy, CopyHighLightedText, CopyPortionFromParagraphs, HighlightText } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CopyToClipboard from "react-copy-to-clipboard";
import { notify } from "@/Data/Forms";

const CopyPortionFromParagraph = () => {
  const [highlightTextValue, setHighlightTextValue] = useState({ value: "Web design is the process of creating websites", copied: false });
  return (
    <Col sm={12} md={6}>
      <Card>
        <CommonCardHeader title={CopyPortionFromParagraphs} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{ClipBoardCopy}</p>
            <CardBody className="border rounded f-w-300">
              <span className="bg-primary text-white p-1">{HighlightText}</span>
              that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website`s look, feel, and occasionally even content.
            </CardBody>
            <div className="mt-3 text-end">
              <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied: true })}>
                <Button className="btn-clipboard" onClick={notify}>
                  <i className="fa fa-copy me-2"></i> {CopyHighLightedText}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyPortionFromParagraph;
