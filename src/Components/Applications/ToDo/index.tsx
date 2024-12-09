"use client";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSideUser from "./LeftSideUser";
import ToDo from "./Todo";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchTodoApiData } from "@/Redux/Reducer/ToDoSlice";

const ToDoContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodoApiData());
  }, []);
  
  return (
    <Container fluid className='email-wrap bookmark-wrap todo-wrap'>
      <Row>
        <LeftSideUser/>
        <ToDo/>
      </Row>
    </Container>
  );
};

export default ToDoContainer;
