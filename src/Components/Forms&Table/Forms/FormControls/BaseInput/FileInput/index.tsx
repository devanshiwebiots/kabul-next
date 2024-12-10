import { Card, CardBody, Col } from "reactstrap";
import { FileInputs, LargeFileInputExample, SmallFileInputExample } from "@/Constant";
import FileInputField from "./Common/FileInputField";
import { FileInputData, FileInputDataList } from "@/Data/Forms";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const FileInput = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={FileInputs} span={FileInputData} />
        <CardBody>
          {FileInputDataList?.map((item, index) => (
            <FileInputField label={item.label} multiple={item.multiple} disabled={item.disabled} key={index} />
          ))}
          <FileInputField label={SmallFileInputExample} size="sm" />
          <FileInputField label={LargeFileInputExample} size="lg" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default FileInput;
