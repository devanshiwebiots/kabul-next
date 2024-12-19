"use client";
import { Container, Row } from "reactstrap";
import BasicModalCard from "./BasicModal";
import SizeModalCard from "./SizesModal";
import FullScreenModals from "./FullScreenModals";
import CenteredModal from "./CenteredModal";
import ToggleBetweenModals from "./ToggleBetweenModals";
import StaticBackdropModal from "./StaticBackdropModal";
import KabulCustomModals from "./KabulCustomModals";

const ModalContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BasicModalCard />
        <SizeModalCard />
        <FullScreenModals />
        <CenteredModal />
        <ToggleBetweenModals/>
        <StaticBackdropModal/>
        <KabulCustomModals/>
      </Row>
    </Container>
  );
};

export default ModalContainer;
