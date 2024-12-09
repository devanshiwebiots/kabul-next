import { Mail, Notification, RemindOn } from "@/Constant";
import { timeList } from "@/Data/Task";
import { useAppSelector } from "@/Redux/Hooks";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup, Input, Label } from "reactstrap";

const TaskRadioRow = () => {

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const handleChange = (date: Date | null) => setStartDate(date);
  const { validation } = useAppSelector((state) => state.task);

  return (
    <Col md={12} className='mt-0'>
      <FormGroup>
        <div className='d-flex date-details'>
          <div className='d-inline-block'>
            <Label className='d-block mb-0' htmlFor='chk-ani' check>
              <Input className='checkbox_animated' id='chk-ani' type='checkbox' />
              {RemindOn}
            </Label>
          </div>
          <div className='d-inline-block'>
            <DatePicker className={`form-control flatpickr-input ${validation ? "is-valid" : ""}`} selected={startDate} onChange={handleChange} />
          </div>
          <div className='d-inline-block'>
            <Input type="select" className={`${validation ? "is-valid" : ""}`}>
              {timeList?.map((item, index) => (
                <option key={index}>{item} am</option>
              ))}
            </Input>
          </div>
          <div className='d-inline-block'>
            <Label className='d-block mb-0' htmlFor='chk-ani1' check>
              <Input className='checkbox_animated' id='chk-ani1' type='checkbox' />
              {Notification}
            </Label>
          </div>
          <div className='d-inline-block'>
            <Label className='d-block mb-0' htmlFor='chk-ani2' check>
              <Input className='checkbox_animated' id='chk-ani2' type='checkbox' />
              {Mail}
            </Label>
          </div>
        </div>
      </FormGroup>
    </Col>
  );
};

export default TaskRadioRow;
