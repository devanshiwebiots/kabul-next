'use client';
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import UserGroupChat from "./UserGroupChat";
import { useAppDispatch } from "@/Redux/Hooks";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducer/ChatSlice";
import { LeftSideBar } from "../PrivateChat/LeftSideBar";

const GroupChatContainer = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <Container fluid>
      <Row className="g-0">
        <LeftSideBar />
        <UserGroupChat />
      </Row>
    </Container>
  );
};

export default GroupChatContainer;