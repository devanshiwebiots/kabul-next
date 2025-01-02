import { DescriptionLists } from "@/Constant";
import { DescriptionListData } from "@/Data/UiKits/Typography";
import { Fragment } from "react";
import { Col } from "reactstrap";

const DescriptionList = () => {

  return (
    <Col md={12} xxl={4}>
      <div className='card-wrapper border rounded-3'>
        <h6 className='sub-title fw-bold'>{DescriptionLists}</h6>
        <dl>
          {DescriptionListData?.map((quote, index) => (
            <Fragment key={index}>
              <dt>{quote.text}</dt>
              <dd className={quote.className}>-{quote.author}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </Col>
  );
};

export default DescriptionList;