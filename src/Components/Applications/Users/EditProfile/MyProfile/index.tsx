import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Bio, MyProfiles, Save } from "@/Constant";
import { BioText } from "@/Data/Users";
import { Button, Card, CardBody, Col, Form, FormGroup, Input } from "reactstrap";
import UserFormGroup from "../Common/UserFormGroup";
import UserFormHead from "./UserFormHead";

const MyProfile = () => {
  return (
    <Col xl={4}>
      <Card>
        <CommonCardHeader title={MyProfiles} />
        <CardBody>
          <Form onSubmit={(event) => event.preventDefault()} className='user-edit-form'>
            <UserFormHead />
            <FormGroup>
              <h6 className='form-label'>{Bio}</h6>
              <Input type='textarea' rows={3} defaultValue={BioText} />
            </FormGroup>
            <UserFormGroup type='email' title='Email Address' placeholder='your-email@domain.com' />
            <UserFormGroup type='password' title='Password' defaultValue='Password' />
            <UserFormGroup type='email' title='Website' placeholder='http://Uplor.com' />
            <div className='form-footer'>
              <Button block color='primary'>
                {Save}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MyProfile;
