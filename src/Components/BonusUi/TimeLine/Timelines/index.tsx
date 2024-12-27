import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TimelineTitle } from "@/Constant";
import { TimeLineData } from "@/Data/BonusUi/Timeline";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { Card, CardBody, Col } from "reactstrap";
import AppIdeasTimeline from "./AppIdeasTimeline";
import BlogTimeline from "./BlogTimeline";
import CarouselTimeline from "./CarouselTimeline";
import AutoTestingTimeline from "./AutoTestingTimeline";
import MeetUpTimeline from "./MeetUpTimeline";
import ResolutionTimeline from "./ResolutionTimeline";

const Timelines = () => {
  return (
    <Col sm="12" className="box-col-12">
      <Card>
        <CommonCardHeader title={TimelineTitle} span={TimeLineData} />
        <CardBody className="rounded-timeline">
          <VerticalTimeline animate={true}>
            <AppIdeasTimeline/>
            <BlogTimeline/>
            <CarouselTimeline/>
            <AutoTestingTimeline/>
            <MeetUpTimeline/>
            <ResolutionTimeline/>
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Timelines;
