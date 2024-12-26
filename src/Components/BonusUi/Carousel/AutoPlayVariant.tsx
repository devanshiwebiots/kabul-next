import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AutoPlay, ImagePath } from "@/Constant";
import { AutoPlayData } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const AutoPlayVariant = () => {

    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={AutoPlay} span={AutoPlayData} />
                <CardBody>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={10}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                    >
                        {[...Array(11)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="item">
                                    <img className="d-block w-100" src={`${ImagePath}/slider/${index + 1}.jpg`} alt="drawing-room" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    )
}

export default AutoPlayVariant
