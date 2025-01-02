import { SearchTableButton, StockResultTitle } from "@/Constant";
import { StockResultColumn, StockResultData, StockResultList } from "@/Data/Tables/DataTables/AdvanceInit";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, CardHeader, Col, Input, Label } from "reactstrap";

const StockResult = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = StockResultData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="stock_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm={12}>
      <Card className="basic-data-table">
        <CardHeader>
          <h4>{StockResultTitle}</h4>
          {StockResultList?.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </CardHeader>
        <CardBody>
          <div className="table-responsive custom-scrollbar">
            <div id="stock_wrapper" className="dataTables_wrapper">
              <DataTable data={filteredItems} columns={StockResultColumn} striped fixedHeader fixedHeaderScrollHeight="50vh" className="display dataTable custom-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockResult;
