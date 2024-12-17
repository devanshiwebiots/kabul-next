import { UnorderList } from "@/Constant";
import { UnorderData } from "@/Data/UiKits/Typography";
import { Col } from "reactstrap";

const UnorderLists = () => {
  return (
    <Col md={6} xxl={4}>
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title fw-bold">{UnorderList}</h6>
        <ul className="mb-3">
          {UnorderData?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
};

export default UnorderLists;