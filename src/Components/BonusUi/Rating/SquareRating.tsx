//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SquareRatingBar } from "@/Constant";
import { data, SquareRatingData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const SquareRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={SquareRatingBar} span={SquareRatingData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={rating} emptySymbol={data.map((n: number) => (<span className="square-number txt-primary" key={n}>{n}</span>))}
              fullSymbol={data.map((n: number) => (<span className="square-number active txt-primary" key={n}>{n}</span>))}
              onChange={(rate) => setRating(rate)}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareRating;
