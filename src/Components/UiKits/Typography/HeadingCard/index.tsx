import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Table } from "reactstrap";
import { Code, FontSize, Heading, Headings } from "@/Constant";
import { HeadingData } from "@/Data/UiKits/Typography";
import HeadingsTableBody from "./HeadingsTableBody";

const HeadingCard = () => {
  return (
    <Col xxl={6}>
      <Card className="height-equal">
        <CommonCardHeader title={Headings} span={HeadingData} tagClass="mb-0"/>
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <Table className="mb-0 typography-table">
              <thead>
                <tr>
                  <th className="pt-0">{Code}</th>
                  <th className="pt-0">{FontSize}</th>
                  <th className="pt-0">{Heading}</th>
                </tr>
              </thead>
              <HeadingsTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingCard;
