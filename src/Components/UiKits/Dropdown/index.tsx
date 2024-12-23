"use client";
import { Container, Row } from "reactstrap";
import Alignments from "./AlignmentDropdown/Alignments";
import BasicDropdown from "./BasicDropdown";
import DarkDropdown from "./DarkDropdown";
import DividerDropdown from "./DividerDropdown";
import DropdownSizing from "./DropdownSizing";
import HeadingDropdown from "./HeadingDropdown";
import HelperCard from "./HelperCard";
import JustifyContents from "./JustifyContents";
import RoundedDropdown from "./RoundedDropdown";
import SplitDropdown from "./SplitDropdown";
import UniqueDropdown from "./UniqueDropdown";
import WithInputType from "./WithInputType";

const DropdownContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicDropdown />
        <RoundedDropdown />
        <SplitDropdown />
        <HeadingDropdown />
        <WithInputType />
        <DarkDropdown />
        <UniqueDropdown />
        <JustifyContents />
        <Alignments />
        <HelperCard />
        <DividerDropdown />
        <DropdownSizing />
      </Row>
    </Container>
  );
};

export default DropdownContainer;
