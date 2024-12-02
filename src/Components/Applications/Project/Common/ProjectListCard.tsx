import { Comment, Done, ImagePath, Issues, Resolved } from "@/Constant";
import { CommonProjectInterface } from "@/Types/Project";
import Image from "next/image";
import { Col, Progress, Row } from "reactstrap";

const ProjectListCard: React.FC<CommonProjectInterface> = ({ item }) => {
  return (
    <Col xxl={4} lg={4} md={6} >
      <div className={`project-box ${item.progress === 100 ? "b-light1-success" : "b-light1-primary"}`}>
        <span className="ribbon ribbon-primary ribbon-clip-right ribbon-right">{item.badge}</span>
        <h5 className="f-w-500">{item.title}</h5>
        <div className="d-flex">
          <Image height={20} width={20} className="me-2 rounded-circle" src={`${ImagePath}/user/3.jpg`} alt="" />
          <div className="flex-grow-1">
            <p>{item.sites}</p>
          </div>
        </div>
        <p>{item.description}</p>
        <Row className="details">
          <Col xs={6}><span>{Issues} </span></Col>
          <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.issue} </Col>
          <Col xs={6}> <span>{Resolved}</span></Col>
          <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.resolved}</Col>
          <Col xs={6}> <span>{Comment}</span></Col>
          <Col xs={6} className={`font-${item.badge === 'Done' ? 'success' : 'primary'}`}>{item.comment}</Col>
        </Row>
        <div className="customers">
          <ul>
            {item?.customer_images?.map((customer, index) => (
              <li key={index} className="d-inline-block"><Image height={30} width={30} className="rounded-circle" src={`${ImagePath}/user/${customer}.jpg`} alt="" /></li>
            ))}
            <li className="d-inline-block ms-2"><p className="f-12">+${item.like} More</p></li>
          </ul>
        </div>
        <div className="project-status mt-4">
          <div className="d-flex mb-0">
            <p>{item.progress}% </p>
            <div className="flex-grow-1 text-end"><span>{Done}</span></div>
          </div>
          <Progress animated striped color='success' value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  );
};

export default ProjectListCard;
