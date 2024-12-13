import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, CreateTag, Save, TagColor, TagName } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setTagModal } from "@/Redux/Reducer/BookmarkTabSlice";

const ModalTag = () => {
  const { tagModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const tagToggle = () => dispatch(setTagModal());

  return (
    <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
      <ModalHeader className="modal-title" toggle={tagToggle}>{CreateTag}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label check>{TagName}</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md={12}>
              <FormGroup>
                <Label check>{TagColor}</Label>
                <Input type="color" className="d-block form-color" defaultValue="#678f44" />
              </FormGroup>
            </Col>
          </Row>
          <Button className="me-1" onClick={tagToggle}>{Save}</Button>
          <Button color="primary" onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ModalTag;
