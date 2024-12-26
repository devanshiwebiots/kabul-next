import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, MouseWheel } from "@/Constant";
import { AutoPlayData } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const MouseWheelVariant = () => {
    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={MouseWheel} span={AutoPlayData} />
                <CardBody>
                    <Swiper
                        modules={[Pagination, Mousewheel]}
                        pagination={{ clickable: true }}
                        mousewheel
                        spaceBetween={10}
                        slidesPerView={3}
                        loop
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

export default MouseWheelVariant