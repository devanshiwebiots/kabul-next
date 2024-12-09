import { CheckCircle } from "react-feather";
import { Button, Modal, ModalBody } from "reactstrap";
import { AddTask, NewTasks } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setAddModal } from "@/Redux/Reducer/TaskSlice";
import NewTaskModalForm from "./NewTaskModalForm";

const NewTask = () => {
  const { addModal } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());

  return (
    <>
      <Button block color="primary" className="badge-primary btn-mail w-100" onClick={addToggle}><CheckCircle className="me-2" />{NewTasks}</Button>
      <Modal size="lg" isOpen={addModal} toggle={addToggle}>
        <div className="modal-header">
          <h3 className="modal-title">{AddTask}</h3>
          <Button close color="transprant" onClick={addToggle} />
        </div>
        <ModalBody>
          <NewTaskModalForm />
        </ModalBody>
      </Modal>
    </>
  );
};

export default NewTask;
