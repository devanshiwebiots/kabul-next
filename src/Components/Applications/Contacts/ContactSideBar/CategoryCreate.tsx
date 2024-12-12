import { Button, Col, Form, Input, Modal, ModalBody, ModalHeader, Row } from 'reactstrap';
import { AddCategory, Cancel, Save } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setCategoryModal } from '@/Redux/Reducer/ContactSlice';

const CategoryCreate = () => {
  const { categoryModal } = useAppSelector((state) => state.contact)
  const dispatch = useAppDispatch()
  const categoryToggle = () => dispatch(setCategoryModal())

  return (
    <>
      <Button color='transparent' className='btn-category' onClick={categoryToggle}  ><span className="title"> + {AddCategory}</span></Button>
      <Modal isOpen={categoryModal} toggle={categoryToggle}>
        <ModalHeader className='modal-title' toggle={categoryToggle}>{AddCategory}</ModalHeader>
        <ModalBody>
          <Form className="form-bookmark">
            <Row className='g-2'>
              <Col md={12} className="mb-3">
                <Input type="text" required placeholder="Enter category name" autoComplete="off" />
              </Col>
            </Row>
            <Button onClick={categoryToggle}>{Save}</Button>
            <Button color='primary' className='ms-1' onClick={categoryToggle}>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CategoryCreate;