//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RatingBars } from "@/Constant";
import { BarRatingData } from "@/Data/BonusUi/Rating";
import { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SimpleRatingBar = () => {
  const [rating, setRating] = useState(7);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={RatingBars} span={BarRatingData} />
        <CardBody>
          <div className='rating'>
            <Rating stop={10} initialRating={rating} emptySymbol='br-selected' fullSymbol='br-selected br-current' onChange={(rate) => setRating(rate)} />
            <span className='current-rating txt-primary'>{rating}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimpleRatingBar;
