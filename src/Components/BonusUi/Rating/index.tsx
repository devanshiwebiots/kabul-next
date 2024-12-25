"use client";
import { Container, Row } from "reactstrap";
import SimpleRatingBar from "./SimpleRatingBar";
import MovingRating from "./MovingRating";
import SquareRating from "./SquareRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import StarRating from "./StarRating";
import CurrentRating from "./CurrentRating";
import AnimatedRating from "./AnimatedRating";
 
const RatingContainer = () => {
  return (
    <Container fluid>
      <Row>
         <SimpleRatingBar/>
         <MovingRating/>
         <SquareRating/>
         <PillRating/>
         <ReverseRating/>
         <StarRating/>
         <CurrentRating/>
         <AnimatedRating/>
      </Row>
    </Container>
  );
};

export default RatingContainer;
