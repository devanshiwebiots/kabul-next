import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AutoTestingTimeline = () => {
  return (
    <VerticalTimelineElement>
      <div className='container right'>
        <div className='date'>18 May</div>
        <i className='icon fa fa-modx' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-success'>Latest</div>
          </div>
          <h4 className='mb-2'>Freelance UX designer</h4>
          <p className='mb-0 f-light'>Our professionals improve the usability and engagement of your website by creating user-friendly interfaces and user-centered designs, resulting in an unmatched online experience. </p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default AutoTestingTimeline;
