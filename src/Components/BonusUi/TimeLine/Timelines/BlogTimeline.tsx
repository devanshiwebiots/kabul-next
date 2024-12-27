import { VerticalTimelineElement } from "react-vertical-timeline-component";

const BlogTimeline = () => {
  return (
    <VerticalTimelineElement>
      <div className='container right'>
        <div className='date'>22 Oct</div>
        <i className='icon fa fa-code-fork' />
        <div className='content'>
          <div className='timeline-wrapper'>
            <div className='badge bg-warning'>Blog</div>
          </div>
          <h4 className='mb-2'>Implemented the program for weekly code challenges.</h4>
          <p className='mb-0 f-light'>You can improve your understanding of programming and problem-solving techniques by taking on challenges.</p>
        </div>
      </div>
    </VerticalTimelineElement>
  );
};
export default BlogTimeline;
