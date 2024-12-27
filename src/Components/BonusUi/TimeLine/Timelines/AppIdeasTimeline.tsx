import { VerticalTimelineElement } from "react-vertical-timeline-component";

const AppIdeasTimeline = () => {

  return (
    <VerticalTimelineElement >
      <div className='container left'>
        <div className='date'>15 Dec</div>
        <i className='icon fa fa-home' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-danger'>app-ideas</div>
          </div>
          <h4 className='mb-2'>Established new the app-ideas repository.</h4>
          <p className='mb-0 f-light'>developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default AppIdeasTimeline;
