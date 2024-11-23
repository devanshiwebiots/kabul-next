import RatioImage from '@/CommonComponents/RatioImage'
import { ImagePath } from '@/Constant'
import { ProductSliderData, Settings } from '@/Data/Widgets/General'
import React from 'react'
import Slider from 'react-slick'
import { Card, CardBody, Col } from 'reactstrap'

const ProductSlider = () => {
    return (
        <Col md={7}>
            <Card className="discount-card">
                <CardBody>
                    <Slider {...Settings}>
                        {ProductSliderData?.map((product, index) => (
                            <div className="special-offer" key={index}>
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <h3>{product.name}</h3>
                                        <h5>${product.price} <del>${product.originalPrice}</del></h5>
                                        <h6 className="bg-light">Special Discount</h6>
                                        <p>Deal of the Day From <span>${product.dealFrom}</span></p>
                                        <ul>
                                            {product.timer.map((time, index) => (
                                                <li key={index}>
                                                    <h5>{time.value}</h5>
                                                    <span>{time.label}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <RatioImage src={`${ImagePath}/dashboard-2/product/${product.image}.png`} alt={product.name} />
                                </div>
                                <div className="product-slider">
                                    <div className="shap-block">
                                        <div className="rounded-shap animate-bg-secondary">
                                            <i /><i /><i />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ProductSlider
