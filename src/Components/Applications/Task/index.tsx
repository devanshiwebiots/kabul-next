"use client";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchTaskApiData, setActiveTab } from "@/Redux/Reducer/TaskSlice";
import NavClass from "./NavClass";
import TabClass from "./TabClass";

const TaskContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTaskApiData());
  }, []);

  const activeToggle = (tab: string) => dispatch(setActiveTab(tab));

  return (
    <Container fluid>
      <div className='email-wrap bookmark-wrap'>
        <Row>
          <NavClass activeToggle={activeToggle} />
          <TabClass/>
        </Row>
      </div>
    </Container>
  );
};

export default TaskContainer;