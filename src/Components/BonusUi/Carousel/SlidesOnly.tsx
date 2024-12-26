import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, SlidesOnlyTitle } from "@/Constant";
import { SlidesOnlyData, SlidesOnlyDataList } from "@/Data/BonusUi/Carousel";

const SlidesOnly = () => {
    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={SlidesOnlyTitle} span={SlidesOnlyData} />
                <CardBody>
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={10}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                    >
                        {SlidesOnlyDataList?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img className="d-block w-100" src={`${ImagePath}/slider/${item}.jpg`} alt="drawing-room" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    )
}

export default SlidesOnly

