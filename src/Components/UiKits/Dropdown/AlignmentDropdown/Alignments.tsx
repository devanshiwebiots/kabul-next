import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Alignment } from "@/Constant";
import { AlignmentData, AlignmentList } from "@/Data/UiKits/Dropdown";
import { Card, CardBody, Col } from "reactstrap";
import AlignmentDropdown from "./AlignmentDropdown";

const Alignments = () => {

    return (
      <Col lg={6}>
        <Card>
          <CommonCardHeader title={Alignment} span={AlignmentData} />
          <CardBody className="dropdown-basic m-0">
            <div className="common-flex">
              {AlignmentList?.map((data, index) => (
                <AlignmentDropdown key={index} value={data} />
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    );
};

export default Alignments;
