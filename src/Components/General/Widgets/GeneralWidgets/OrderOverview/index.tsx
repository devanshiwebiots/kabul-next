import DashboardCommonHeader from '@/Components/General/Dashboards/Common/DashboardCommonHeader'
import { Order } from '@/Constant'
import { OrderOverviewData } from '@/Data/Widgets/General'
import { Card, CardBody, Col, Progress, Row } from 'reactstrap'
import MonthlyGrowth from './MonthlyGrowth'

const OrderOverview = () => {
    return (
        <Col xl={6} className="col-xl-70 box-col-8e">
            <Row>
                <Col md={7}>
                    <Card className="order-overview">
                        <DashboardCommonHeader title={Order} />
                        <CardBody>
                            <div className="d-flex">
                                <h2 className="me-2">($3,512,201)</h2>
                                <h6>Total Revenue</h6>
                            </div>
                            {OrderOverviewData?.map((item, index) => (
                                <div className="total-revenue" key={index}>
                                    <div className="d-flex">
                                        <h5 className="me-2">{item.value}</h5>
                                        <span>({item.label})</span>
                                    </div>
                                    <Progress value={item.progress} color={item.color} className={`bg-light-${item.color}`} />
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                </Col>
                <MonthlyGrowth />
            </Row>
        </Col>
    )
}

export default OrderOverview
