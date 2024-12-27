import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, WithCaption } from "@/Constant";
import { WithCaptionsData, WithCaptionsDataList } from "@/Data/BonusUi/Carousel";
import { useState } from "react";
import RatioImage from "@/CommonComponents/RatioImage";

const WithCaptions = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={WithCaption} span={WithCaptionsData} />
                <CardBody>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        slidesPerView={1}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    >
                        {WithCaptionsDataList?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                    <RatioImage className="d-block w-100" src={`${ImagePath}/slider/${slide.src}.jpg`} alt="drawing-room" />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    )
}

export default WithCaptions
