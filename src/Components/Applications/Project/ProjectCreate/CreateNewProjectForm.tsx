import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ProjectInitialValue } from "@/Types/Project";
import { NewProjectInitialValue, NewProjectValidation } from "@/Data/Project";
import { setCreatedData } from "@/Redux/Reducer/ProjectSlice";
import TitleAndClient  from "./TitleAndClient";
import { Routes } from "@/Utils/Routes";
import Details from "./Details";
import ProjectDates from "./ProjectDates";
import Description from "./Description";
import UploadProjectFile from "./UploadProjectFile";
import ActionButtons from "./ActionButtons";

const CreateNewProjectForm = () => {
  const router = useRouter();
  const { createdFormData } = useAppSelector((state) => state.project);
  const dispatch = useAppDispatch();
  const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  const projectSubmit = (values:ProjectInitialValue) => {
    const submittedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      sites: "Themeforest, australia",
      description: "Kabul Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customer_images: ["3","5","1"],
      progress: values.progress,
    };
    dispatch(setCreatedData([...createdFormData, submittedData]));
    router.push(Routes.Project.ProjectList);
  };

  return (
    <Formik initialValues={NewProjectInitialValue} validationSchema={NewProjectValidation} onSubmit={projectSubmit}>
      {({errors, touched }) => (
        <Form className="theme-form">
          <TitleAndClient errors={errors} touched={touched}/>
          <Details errors={errors} touched={touched}/>
          <ProjectDates />
          <Description/>
          <UploadProjectFile />
          <ActionButtons />
        </Form>
      )}
    </Formik>
  );
};

export default CreateNewProjectForm;
