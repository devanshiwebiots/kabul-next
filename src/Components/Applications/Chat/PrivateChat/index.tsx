"use client";
import { useAppDispatch } from "@/Redux/Hooks";
import { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { LeftSideBar } from "./LeftSideBar";
import { fetchChatApiData, fetchChatMemberApiData } from "@/Redux/Reducer/ChatSlice";
import UserChat from "./UserChat";

const PrivateChatContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchChatMemberApiData());
    dispatch(fetchChatApiData());
  }, []);

  return (
    <Container fluid>
      <Row className='g-0'>
        <LeftSideBar />
        <UserChat/>
      </Row>
    </Container>
  );
};

export default PrivateChatContainer;
