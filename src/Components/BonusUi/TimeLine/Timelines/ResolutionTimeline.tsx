import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const ResolutionTimeline = () => {
  return (
    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="December 31 2024" icon={<div className="cd-timeline-img cd-movie bg-danger"> <i className="icon-agenda" /> </div>} >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="warning">Resolutions</Badge>
        </div>
        <h5 className="m-0">My Resolutions for 2024 </h5>
        <p className="mb-0">I'm determined to streamline, organism, systematism, realign, and embrace life in 2024.</p>
        <div className="time-content pt-2 d-flex">
          <i className="icon-write me-2"></i>
          <h6> My Resolutions</h6>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default ResolutionTimeline;
