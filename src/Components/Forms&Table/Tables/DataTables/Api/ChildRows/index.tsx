import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { ChildrenRowsTitle, SearchTableButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { useMemo, useState } from "react";
import CustomExpandableComponent from "./CustomExpandableComponent";
import { ZeroConfigurationData } from "@/Data/Tables/DataTables/BasicInit";
import { ChildRowColumn, ChildRowData } from "@/Data/Tables/DataTables/Api";

const ChildRows = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ZeroConfigurationData.filter((item) =>item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="API-chield-row_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);
  
  return (
    <Col sm={12}>
      <Card className="basic-data-table">
        <CommonCardHeader title={ChildrenRowsTitle} span={ChildRowData} />
        <CardBody>
          <div className="table-responsive">
            <div id="API-chield-row">
              <DataTable data={filteredItems} columns={ChildRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped  highlightOnHover className="display custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;