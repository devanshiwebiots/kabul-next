import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, WithCaption } from "@/Constant";
import { WithCaptionsData, WithCaptionsDataList } from "@/Data/BonusUi/Carousel";

const WithCaptions = () => {

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
                    >
                        {WithCaptionsDataList?.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div >
                                    <img className="d-block w-100" src={`${ImagePath}/slider/${slide.src}.jpg`} alt="drawing-room" />
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
