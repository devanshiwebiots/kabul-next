import { VerticalTimelineElement } from "react-vertical-timeline-component";

const MeetUpTimeline = () => {
  return (
    <VerticalTimelineElement>
      <div className='container left'>
        <div className='date'>10 Feb</div>
        <i className='icon fa fa-file-audio-o' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-primary'>Audio testing</div>
          </div>
          <h4 className='mb-2'>Musical trends and predictability</h4>
          <p className='mb-1 f-light'>So, the next time you listen to music, you might or might not consider how it`s actively altering your mood.</p>
          <audio controls>
            <source src='../assets/audio/horse.ogg' type='audio/ogg' />
          </audio>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default MeetUpTimeline;
