import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ResolutionTimeline = () => {
  return (
    <VerticalTimelineElement>
      <div className='container right'>
        <div className='date'>01 Jan</div>
        <i className='icon fa fa-group' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-success'>Meet-up</div>
          </div>
          <h4 className='mb-2'>Web-designer`s meet-up</h4>
          <p className='mb-0 f-light'>Find nearby web designers to network with! A Web Design Meetup is a place where you can discuss tools. </p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default ResolutionTimeline;
