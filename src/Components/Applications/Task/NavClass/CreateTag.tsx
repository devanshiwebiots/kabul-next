import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Button, Col, Form, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, CreateTags, Save, TagColor, TagName } from "@/Constant";
import { CreateTagProp } from "@/Types/Task";

const CreateTag: React.FC<CreateTagProp> = ({ tagCallback, tagModal, setTagModal }) => {
  const [validation, setValidation] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const tagToggle = () => tagCallback(false);
  const AddTag = () => {
    toast.success("Your Form is Submitted")
    setTagModal(false)
  };

  return (
    <Modal fade className="modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <ModalHeader className="modal-title" toggle={tagToggle}>{CreateTags}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <Row>
            <Col md={12} className="mb-3 mt-0">
              <Label check>{TagName}</Label>
              <input className={`form-control ${validation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} />
            </Col>
            <Col md={12} className="mt-0">
              <Label check>{TagColor}</Label>
              <input className={`form-color d-block  ${validation && `${errors.color ? "is-invalid" : "is-valid"}`}`} type="color" {...register("color", { required: true })} defaultValue="#678f44" />
            </Col>
          </Row>
          <Button className="me-1" type="submit" onClick={() => setValidation(true)}>{Save}</Button>
          <Button color="primary" onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default CreateTag;
