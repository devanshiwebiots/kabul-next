//@ts-nocheck
import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnimatedRatingBar } from "@/Constant";
import { AnimatedRatingData } from "@/Data/BonusUi/Rating";
import SVG from "@/CommonComponents/SVG";

const AnimatedRating = () => {
  const [rating, setRating] = useState(null);

  const handleRating = (rate: React.SetStateAction<null>) => {
    setRating(rate);
  };

  const renderEmoji = (rate: number | React.SetStateAction<null>, className: string) => (
    <li className={`${className} ${rating === rate ? 'active' : ''} me-0`} onClick={() => handleRating(rate)}>
      <div>
        <SVG className="eye left" iconId="eye" />
        <SVG className="eye right" iconId="eye" />
        {rate !== 3 && (
          <SVG className="mouth" iconId="mouth" />
        )}
      </div>
    </li>
  );

  return (
    <Col xxl={4} md={6}>
      <Card>
        <CommonCardHeader title={AnimatedRatingBar} span={AnimatedRatingData} />
        <CardBody>
          <div className="rating-container">
            <ul className="feedback">
              {renderEmoji(1, 'angry')}
              {renderEmoji(2, 'sad')}
              {renderEmoji(3, 'ok')}
              {renderEmoji(4, 'good')}
              {renderEmoji(5, 'happy')}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedRating;
