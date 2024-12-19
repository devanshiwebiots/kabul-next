import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { NumberOfPillsTags } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { RoundedContext, RoundedData } from "@/Data/UiKits/TagAndPills";

const NumberOfPillsTagCard = () => {
  return (
    <Col sm={12} xl={6}>
      <Card>
        <CommonCardHeader title={NumberOfPillsTags} span={RoundedData} />
        <CommonTagAndPillsCardBody data={RoundedContext} />
      </Card>
    </Col>
  )
};

export default NumberOfPillsTagCard;