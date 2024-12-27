import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { DarkVariation, ImagePath } from "@/Constant";
import { DarkVariantData, DarkVariantDataList } from "@/Data/BonusUi/Carousel";
import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const DarkVariant = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={DarkVariation} span={DarkVariantData} />
                <CardBody>
                    <div className="carousel-dark">
                        <Swiper
                            modules={[Navigation, Autoplay, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            loop
                            slidesPerView={1}
                            autoplay={{ delay: 2000 }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        >
                            {DarkVariantDataList?.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                        <RatioImage className="d-block w-100" src={`${ImagePath}/slider/${slide.src}.jpg`} alt="drawing-room" />
                                        <div className="carousel-caption d-none d-md-block carousel-opacity">
                                            <h3>{slide.title}</h3>
                                            <p>{slide.description}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DarkVariant
