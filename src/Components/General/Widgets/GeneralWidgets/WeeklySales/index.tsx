import SVG from '@/CommonComponents/SVG';
import { Card, CardBody, Col, Row } from 'reactstrap';
import ProductSlider from './ProductSlider';
import { WeeklySalesData } from '@/Data/Widgets/General';

const WeeklySales = () => {

    return (
        <Col xl={6} className="col-xl-100 box-col-12">
            <Row>
                <Col md={5}>
                    <Row>
                        {WeeklySalesData?.map((item, index) => (
                            <Col xl={12} lg={12} md={12} sm={6} key={index}>
                                <Card className="since">
                                    <CardBody>
                                        <div className={`customer-card d-flex b-l-${item.colorClass} border-2`}>
                                            <div className="ms-3">
                                                <h3 className="mt-1">{item.title}</h3>
                                                <h5 className="mt-1">{item.count}</h5>
                                            </div>
                                            <div className={`dashboard-user bg-light-${item.colorClass}`}>
                                                <span />
                                                <SVG iconId={item.iconId} />
                                            </div>
                                        </div>
                                        <div className="customer">
                                            <span className="me-1">
                                                <SVG iconId="arrow-up" />
                                            </span>
                                            <span className="font-success me-2">{item.percentage}</span>
                                            <span>Since last Week</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <ProductSlider />
            </Row>
        </Col>
    )
}

export default WeeklySales
