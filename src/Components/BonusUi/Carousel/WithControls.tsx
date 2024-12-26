import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, WithControlsTitle } from "@/Constant";
import { WithControlData, WithControlDataList } from "@/Data/BonusUi/Carousel";

const WithControls = () => {
    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={WithControlsTitle} span={WithControlData} />
                <CardBody>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 2000 }}
                    >
                        {WithControlDataList?.map((item, index) => (
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

export default WithControls
