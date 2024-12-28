import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath } from "@/Constant";

const CarouselTimeline = () => {

  return (
    <VerticalTimelineElement className="cd-timeline-block" dateClassName="cd-date" date="April 23 2024" icon={<div className="cd-timeline-img cd-picture bg-success"> <i className="icon-image" /> </div>}>
      <div className="cd-timeline-content">
        <div className="timeline-wrapper">
          <Badge color="info">Designer</Badge>
        </div>
        <h5 className="m-0">Research about most recent design trends.</h5>
        <p className="mb-0">Spend some time looking up current design trend.</p>
        <Swiper
          modules={[Navigation, Pagination]}
          loop={true}
          navigation
          pagination={{ clickable: true }}
        >
          {Array.from({ length: 3 }, (_, i) => (
            <SwiperSlide key={i}>
              <RatioImage src={`${ImagePath}/banner/${i+1}.jpg`} className="d-block w-100" alt="office-work"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </VerticalTimelineElement>
  );
};
export default CarouselTimeline;
