import { Card, Col, CardBody, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredHeadings, Code, Heading } from "@/Constant";
import { HeadingData } from "@/Data/UiKits/Typography";
import ColorHeadingTableBody from "./ColorHeadingTableBody";

const ColoredHeadingsCard = () => {
  return (
    <Col xxl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={ColoredHeadings} span={HeadingData} tagClass="mb-0"/>
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  <th className="pt-0">{Code}</th>
                  <th className="pt-0">{Heading}</th>
                </tr>
              </thead>
              <ColorHeadingTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredHeadingsCard;
