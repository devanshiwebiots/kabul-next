import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const MeetUpTimeline = () => {
  return (
    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="November 04 2024" icon={<div className="cd-timeline-img cd-location bg-secondary"> <i className="icon-pin-alt" /> </div>} >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="success">Meet-up</Badge>
        </div>
        <h5 className="m-0">Web-designer's meet-up </h5>
        <p className="mb-0">Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools. </p>
        <div className="time-content pt-2 d-flex">
          <i className="icon-android me-2"></i>
          <h6> Please! Meet-up</h6>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default MeetUpTimeline;
