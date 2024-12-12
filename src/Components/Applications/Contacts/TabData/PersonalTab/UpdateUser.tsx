import { Cancel, Email, ImagePath, Mobile, Name, Phone, Save } from '@/Constant';
import { useAppDispatch } from '@/Redux/Hooks';
import { setEditData } from '@/Redux/Reducer/ContactSlice';
import { UpdateUserPropsType, UserUpdateType } from '@/Types/Contact';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, Col, Form, Input, Label, Row } from 'reactstrap';

const UpdateUser: React.FC<UpdateUserPropsType> = ({ editData, userEditCallback }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserUpdateType>();
  const dispatch = useAppDispatch()

  const UpdateContact: SubmitHandler<UserUpdateType> = (updatedData) => {
    const withImageData = { ...updatedData, avatar: `${ImagePath}/user/user.png` }
    userEditCallback(false, withImageData)
    dispatch(setEditData(withImageData));
  };

  return (
    <div className="contact-editform ps-0 m-auto">
      <Form onSubmit={handleSubmit(UpdateContact)}>
        <Row className='g-2'>
          <Col md={12} className="mb-3">
            <Label check>{Name}</Label>
            <Row>
              <Col sm={6}>
                <input className="form-control" type="text" defaultValue={editData?.name} {...register('name', { required: true })} />
                {errors.name && <span className='txt-danger'>First name is required</span>}
              </Col>
              <Col sm={6}>
                <input className="form-control" type="text" defaultValue={editData.surname} {...register('surname', { required: true })} />
                {errors.surname && <span className='txt-danger'>Last name is required</span>}
              </Col>
            </Row>
          </Col>
          <Col md={12} className="mb-3">
            <Label check>{Email}</Label>
            <input className="form-control" type="text" defaultValue={editData.email} {...register('email', { required: true })} />
            {errors.email && <span className='txt-danger'>Please enter email between 18 to 70 year.</span>}
          </Col>
          <Col md={12} className="mb-3 my-0">
            <Row>
              <Col sm={6}>
                <Label htmlFor="con-phone" check>{Phone}</Label>
                <input className="form-control" type="number" defaultValue={editData.mobile} {...register('mobile', { required: true })} />
                {errors.mobile && <span className='txt-danger'>Please enter Mobile no.</span>}
              </Col>
              <Col sm={6}>
                <Label htmlFor="con-phone" check>{Mobile}</Label>
                <Input type="select">
                  <option value="1">Mobile</option>
                  <option value="2">Work</option>
                  <option value="3">Other</option>
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
        <Button className='update-contact me-1'>{Save}</Button>
        <Button color='primary' onClick={() => userEditCallback(false, editData)}>{Cancel}</Button>
      </Form>
    </div>
  );
};

export default UpdateUser;