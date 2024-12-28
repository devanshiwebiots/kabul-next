import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const CarouselTimeline = () => {
  return (
    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="April 23 2024" icon={<div className="cd-timeline-img cd-picture bg-success"> <i className="icon-image" /> </div>}>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="danger">Designer</Badge>
        </div>
        <h5 className="m-0">Research about most recent design trends.</h5>
        <p className="mb-0">Spend some time looking up current design trend.</p>
        <div className="ratio ratio-21x9 m-t-20">
          <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="blog_time" allowFullScreen></iframe>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default CarouselTimeline;
