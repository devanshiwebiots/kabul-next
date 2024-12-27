import { VerticalTimelineElement } from "react-vertical-timeline-component";

const CarouselTimeline = () => {
  return (
    <VerticalTimelineElement >
      <div className='container left'>
        <div className='date'>10 Jul</div>
        <i className='icon fa fa-tencent-weibo' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-primary'>Designer</div>
          </div>
          <h4 className='mb-2'>Research about most recent design trends.</h4>
          <p className='mb-0 f-light'>With our extensive analysis of the most recent design trends, discover the cutting edge of web aesthetics.</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default CarouselTimeline;
