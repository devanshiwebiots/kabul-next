import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AdditionalContents } from "@/Constant";
import { AdditionalData, AdditionalList } from "@/Data/UiKits/Alert";
import { Alert, Card, CardBody, Col } from "reactstrap";

const AdditionalContent = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={AdditionalContents} span={AdditionalData} />
        <CardBody className="dark-alert">
          {AdditionalList?.map(({ color, title, paragraph1, paragraph2 }, index) => (
            <Alert color={`light-${color}`}  className={`bg-light-${color}`} key={index}>
              <h4 className={`alert-heading pb-2 txt-${color}`}>{title}</h4>
              <p>{paragraph1}</p>
              <hr />
              <p className="mb-0">{paragraph2}</p>
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContent;
