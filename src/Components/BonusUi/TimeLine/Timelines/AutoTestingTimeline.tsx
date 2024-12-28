import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const AutoTestingTimeline = () => {
  return (

    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="June 12 2024" icon={ <div className="cd-timeline-img cd-location bg-info"> <i className="icon-pulse" /> </div> } >
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="primary">Audio testing</Badge>
        </div>
        <h5 className="m-0">Musical trends and predictability</h5>
        <p className="mb-0">So, the next time you listen to music, you might or might not consider how it's actively altering your mood.</p>
        <audio controls>
          <source src="/assets/audio/horse.ogg" type="audio/ogg" />
        </audio>
      </div>
    </VerticalTimelineElement>
  );
};
export default AutoTestingTimeline;
