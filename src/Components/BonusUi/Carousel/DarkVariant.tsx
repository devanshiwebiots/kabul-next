import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DarkVariation, ImagePath } from "@/Constant";
import { DarkVariantData, DisableTouchDataList } from "@/Data/BonusUi/Carousel";
import { Card, CardBody, Col } from "reactstrap";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

const DarkVariant = () => {

    const slides = [
        {
            src: '../assets/images/slider/1.jpg',
            alt: 'Drawing-room 1',
            title: 'We decorate our homes',
            description: 'If you have been dreaming about bringing your living room together, our designers are here to help. Come see what we can do for your space.',
            interval: 10000
        },
        {
            src: '../assets/images/slider/3.jpg',
            alt: 'Drawing-room 2',
            title: 'This couch is a great topic of conversation.',
            description: 'A sofa is the ideal spot to enjoy a movie, nod off, and wake up.',
            interval: 2000
        },
        {
            src: '../assets/images/slider/6.jpg',
            alt: 'Drawing-room 3',
            title: 'Sometimes all you really need to unwind is a comfortable couch.',
            description: 'A house you can create with your friends is a great place.',
            interval: 5000
        }
    ];
    return (
        <Col xl={6} xs={12} >
            <Card>
                <CommonCardHeader title={DarkVariation} span={DarkVariantData} />
                <CardBody>
                    {/* <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        loop
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div>
                                    <img className="d-block w-100" src={slide.src} alt={slide.alt} />
                                    <div className="carousel-caption d-none d-md-block carousel-opacity">
                                        <h3>{slide.title}</h3>
                                        <p>{slide.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper> */}
                </CardBody>
            </Card>
        </Col>
    )
}

export default DarkVariant
