import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const BlogTimeline = () => {
  return (
    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="March 12 2024" icon={<div className="cd-timeline-img bg-danger"> <i className="icon-youtube" /> </div>} >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="danger">Blog</Badge>
        </div>
        <h5 className="m-0">Implemented the program for weekly code challenges.</h5>
        <p className="mb-0">
          Challenges <em className="txt-danger">help you build problem-solving skills, better understand the programming. </em>
          If you want to improve your skills in programming.
        </p>
        <div className="ratio ratio-21x9 m-t-20">
          <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="blog_time" allowFullScreen></iframe>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default BlogTimeline;
