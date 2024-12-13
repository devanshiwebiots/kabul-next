"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import { TypeAheadData } from "@/Data/Forms";
import TypeAheadCard from "./Common/TypeAheadCard";

const TypeAheadContainer = () => {
  return (
    <Container fluid>
      <div className='typeahead typeahead-wrapper'>
        <Row>
          {TypeAheadData?.map((card, index) => (
            <TypeAheadCard key={index} {...card} />
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default TypeAheadContainer;
