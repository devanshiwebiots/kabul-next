"use client";
import { Container } from "reactstrap";
import LeftRibbons from "./LeftRibbons";
import RightRibbons from "./RightRibbons";
 
const RibbonsContainer = () => {
  return (
    <Container fluid>
       <LeftRibbons/>
       <RightRibbons/>
    </Container>
  );
};

export default RibbonsContainer;
