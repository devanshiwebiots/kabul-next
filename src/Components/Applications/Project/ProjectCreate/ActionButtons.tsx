import { Add, Cancel } from "@/Constant";
import { Routes } from "@/Utils/Routes";
import Link from "next/link";
import { Button, Col, Row } from "reactstrap";

const ActionButtons = () => {
  return (
    <Row>
      <Col>
        <div className='text-end'>
          <Button color='success' className='me-3'>{Add}</Button>
          <Link className='btn btn-danger' href={Routes.Project.ProjectList}>{Cancel}</Link>
        </div>
      </Col>
    </Row>
  );
};

export default ActionButtons;
