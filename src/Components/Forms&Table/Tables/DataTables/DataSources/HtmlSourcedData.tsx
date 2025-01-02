import { Card, CardBody, Col, Input, Label } from "reactstrap";
import DataTable from "react-data-table-component";
import { HtmlTableTitle, SearchTableButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { useMemo, useState } from "react";
import { HtmlColumn, HtmlColumnData, HtmlData } from "@/Data/Tables/DataTables/DataSources";

const HtmlSourcedData = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = HtmlColumnData.filter((item) =>item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm={12}>
      <Card className="basic-data-table">
        <CommonCardHeader title={HtmlTableTitle} span={HtmlData} />
        <CardBody>
          <div className="table-responsive">
            <DataTable className="custom-scrollbar" data={filteredItems} columns={HtmlColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlSourcedData;
