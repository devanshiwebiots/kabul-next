import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { DisableTouchSwiping, ImagePath } from "@/Constant";
import { DisableTouchData, DisableTouchDataList } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const DisableTouch = () => {

    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={DisableTouchSwiping} span={DisableTouchData} />
                <CardBody>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        loop
                        slidesPerView={1}
                        simulateTouch={false}
                    >
                        {DisableTouchDataList?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <RatioImage className="d-block w-100" src={`${ImagePath}/slider/${item}.jpg`} alt="drawing-room" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisableTouch
