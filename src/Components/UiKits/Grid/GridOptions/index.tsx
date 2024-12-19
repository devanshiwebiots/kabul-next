import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GridOption } from "@/Constant";
import { GridData } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Table } from "reactstrap";
import GridOptionsTable from "./GridOptionsTable";

const GridOptions = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonCardHeader title={GridOption} span={GridData} />
        <CardBody className="grid-options-card">
          <div className="table-responsive custom-scrollbar">
            <Table bordered striped>
              <GridOptionsTable />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptions;
