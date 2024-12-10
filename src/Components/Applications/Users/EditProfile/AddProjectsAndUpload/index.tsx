import { Card, Col, Table } from "reactstrap";
import AddProjectsAndUploadTableBody from "./AddProjectsAndUploadTableBody";
import { AddProjectAndUpload } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const AddProjectsAndUpload = () => {
  return (
    <Col md={12}>
      <Card>
        <CommonCardHeader title={AddProjectAndUpload} headClass="pb-9"/>
        <div className="table-responsive theme-scrollbar add-project">
          <Table className="card-table table-vcenter text-nowrap">
            <thead className="bg-light-primary">
              <tr>
                <th>Project Name</th>
                <th>Project Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;
