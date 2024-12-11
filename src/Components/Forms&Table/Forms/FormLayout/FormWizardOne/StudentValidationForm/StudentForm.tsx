import { Next, Previous } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { handleStudentBackButton, handleStudentNextButton } from "@/Redux/Reducer/FormLayout/StudentWizardSlice";
import { StudentFormPropsType } from "@/Types/Forms";
import { Button } from "reactstrap";
import FinishForm from "../Common/FinishForm";
import StudentTab1 from "./StudentTab1";
import StudentTab2 from "./StudentTab2";
import StudentTab3 from "./StudentTab3";

const StudentForm: React.FC<StudentFormPropsType> = ({ handleImageLabelClick, imageUrl, getUserData, studentValidationForm, level, fileInputRef }) => {
  const dispatch = useAppDispatch();
  return (
    <div className='form-wizard'>
      {level === 1 && <StudentTab1 studentValidationForm={studentValidationForm} getUserData={getUserData} />}
      {level === 2 && <StudentTab2 studentValidationForm={studentValidationForm} getUserData={getUserData} fileInputRef={fileInputRef} handleImageLabelClick={handleImageLabelClick} imageUrl={imageUrl} level={level} />}
      {level === 3 && <StudentTab3 studentValidationForm={studentValidationForm} getUserData={getUserData} />}
      {level === 4 && <FinishForm />}
      <div>
        <div className='text-end pt-3'>
          {level > 1 && (
            <Button onClick={() => dispatch(handleStudentBackButton())}>
              {Previous}
            </Button>
          )}
          <Button color='primary' className={`ms-1 ${level === 4 ? "disabled" : ""}`} onClick={() => dispatch(handleStudentNextButton())}>
            {Next}
          </Button>
          <div className="text-center"><span className="step" /><span className="step" /><span className="step" /><span className="step" /></div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
