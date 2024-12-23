import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FilledTooltips } from "@/Constant";
import { FillTooltipData, FillTooltipList } from "@/Data/UiKits/Tooltip";
import { Card, CardBody, Col } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";

const FilledTooltip = () => {

  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={FilledTooltips} span={FillTooltipData} />
        <CardBody>
          <div className="common-flex">
            {FillTooltipList?.map((data) => (
              <CommonTooltip key={data.id} outline={true} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FilledTooltip;
