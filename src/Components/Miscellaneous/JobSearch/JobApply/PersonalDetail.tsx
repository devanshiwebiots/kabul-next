import { BirthDateJob, EmailJob, EmailJobPlaceholder, FullNameJob, FullNameJobPlaceholder, PasswordJob, PasswordJobPlaceholder, PhoneNumberJob, PhoneNumberJobPlaceholder, RepeatPasswordJob, RepeatPasswordJobPlaceholder } from "@/Constant";
import { DaysJob, MonthsJob, YearsJob } from "@/Data/Miscellaneous/JobSearch";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const PersonalDetail = () => {
  return (
    <Form className="theme-form">
      <Row>
        <Col>
          <FormGroup>
            <Label check>{FullNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder={FullNameJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{EmailJob}:<span className="font-danger">*</span></Label>
            <Input type="email" placeholder={EmailJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{PasswordJob}:<span className="font-danger">*</span></Label>
            <Input type="password" placeholder={PasswordJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{RepeatPasswordJob}:<span className="font-danger">*</span></Label>
            <Input type="password" placeholder={RepeatPasswordJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <div className="col-form-label pt-0">{BirthDateJob}</div>
          <FormGroup>
            <Typeahead labelKey="name" multiple={false} id="Month" options={MonthsJob} placeholder="Choose a Month..." />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <div className="col-form-label m-2 d-sm-block d-none"></div>
          <FormGroup className="select-no-label">
            <Typeahead labelKey="name" multiple={false} options={DaysJob} id="date" placeholder="date" />
          </FormGroup>
        </Col>
        <Col sm={4}>
          <div className="col-form-label m-2 d-sm-block d-none"></div>
          <FormGroup className="select-no-label">
            <Typeahead labelKey="name" multiple={false} options={YearsJob} id="Year" placeholder="Year" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label check>{PhoneNumberJob}:</Label>
            <Input type="number" placeholder={PhoneNumberJobPlaceholder} />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default PersonalDetail;
