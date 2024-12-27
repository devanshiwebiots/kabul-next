import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import RatioImage from "@/CommonComponents/RatioImage";
import { ImagePath, WithIndicator } from "@/Constant";
import { WithIndicatorsData, WithIndicatorsDataList } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const WithIndicators = () => {

    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={WithIndicator} span={WithIndicatorsData} />
                <CardBody>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                    >
                        {WithIndicatorsDataList?.map((item, index) => (
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

export default WithIndicators
