import { Href, ImagePath, JobCancelButton, JobEndlessTelecomTechnologies, JobPersonalDetails, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, JobYourEducation, JobYourExperience, StarColor } from "@/Constant";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";
import { Button, Card, CardBody, CardFooter } from "reactstrap";
import PersonalDetail from "./PersonalDetail";
import EducationClass from "./Education";
import ExperienceClass from "./Experience";
import UploadFileClass from "./UploadFile";
import Image from "next/image";

const JobApply = () => {
  return (
    <Card>
      <div className='job-search'>
        <CardBody className='pb-0'>
          <div className='d-flex'>
            <Image height={36} width={33} priority className='b-r-0 img-fluid  m-r-20' src={`${ImagePath}/job-search/1.png`} alt='' />
            <div className='flex-grow-1'>
              <h6 className='f-w-600'>
                <Link href={Href}>{JobUIDesigner}</Link>
                <span className='pull-right'>
                  <Button color='primary'>
                    <span><i className='fa fa-check text-white' /></span>&nbsp;
                    Save this job
                  </Button>
                </span>
              </h6>
              <p>
                {JobEndlessTelecomTechnologies} <Rating className='ms-1' fillColor={StarColor} initialValue={Math.random() * 5} size={15} />
              </p>
            </div>
          </div>
          <div className='job-description'>
            <h4 className='mb-0'>{JobPersonalDetails}</h4>
            <PersonalDetail />
            <h4 className='mb-0'>{JobYourEducation}</h4>
            <EducationClass />
            <h4 className='mb-0'>{JobYourExperience}</h4>
            <ExperienceClass />
            <h4 className='mb-0'>{JobUploadYourFiles}</h4>
            <UploadFileClass />
          </div>
        </CardBody>
        <CardFooter>
          <Button color='primary mx-1'>{JobSubmitButton}</Button>
          <Button color='light'>{JobCancelButton}</Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default JobApply;
