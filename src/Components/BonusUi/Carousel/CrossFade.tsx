import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Cross, ImagePath } from "@/Constant";
import { CrossFadeData, CrossFadeDataList } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const CrossFade = () => {

  return (
    <Col xl={6} xs={12} >
      <Card>
        <CommonCardHeader title={Cross} span={CrossFadeData} />
        <CardBody>
          <Swiper
            modules={[Autoplay, EffectFade, Navigation]}
            effect="fade"
            navigation
            loop
            autoplay={{ delay: 2000 }}
            slidesPerView={1}
          >
            {CrossFadeDataList?.map((item, index) => (
              <SwiperSlide key={index}>
                <div>
                  <img className="d-block w-100" src={`${ImagePath}/slider/${item}.jpg`} alt="drawing-room" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CrossFade
