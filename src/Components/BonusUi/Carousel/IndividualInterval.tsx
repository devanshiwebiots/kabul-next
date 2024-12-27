//@ts-nocheck
import { useEffect, useRef } from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, IndividualItemInterval } from "@/Constant";
import { IndividualIntervalData, IndividualIntervalDataList } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import RatioImage from "@/CommonComponents/RatioImage";

const IndividualInterval = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (!swiperRef.current) return;

        const swiperInstance = swiperRef.current.swiper;

        // Function to update autoplay delay dynamically
        const updateAutoplayDelay = () => {
            const currentSlideIndex = swiperInstance.realIndex;
            const currentInterval = IndividualIntervalDataList[currentSlideIndex].interval;
            swiperInstance.params.autoplay.delay = currentInterval;
            swiperInstance.autoplay.stop();
            swiperInstance.autoplay.start();
        };

        // Update autoplay delay when slide changes
        swiperInstance.on('slideChange', updateAutoplayDelay);

        // Cleanup on component unmount
        return () => {
            swiperInstance.off('slideChange', updateAutoplayDelay);
        };
    }, [IndividualIntervalDataList]);

    return (
        <Col xl={6} xs={12}>
            <Card>
                <CommonCardHeader title={IndividualItemInterval} span={IndividualIntervalData} />
                <CardBody>
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation]}
                        navigation
                        loop
                        autoplay={{ delay: IndividualIntervalDataList[0].interval }}
                        slidesPerView={1}
                    >
                        {IndividualIntervalDataList?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <RatioImage className="d-block w-100" src={`${ImagePath}/slider/${item.src}.jpg`} alt="drawing-room" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </CardBody>
            </Card>
        </Col>
    );
};

export default IndividualInterval;
