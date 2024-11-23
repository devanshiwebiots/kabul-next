import SVG from '@/CommonComponents/SVG'
import { OfflineOrdersChart } from '@/Data/Widgets/Charts'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'

const OfflineOrders = () => {
    return (
        <Col xl={2} sm={6} className="col-xl-33 box-col-4 offline-card">
            <Card className="online-order">
                <CardHeader className="offline-order">
                    <div className="d-flex">
                        <div className="order bg-light-secondary"><span />
                            <SVG iconId="delivery" />
                        </div>
                        <div className="arrow-chart">
                            <SVG iconId="arrow-chart-up" />
                            <span className="font-success">+8.3%</span>
                        </div>
                    </div>
                    <div className="online"><span>Offline Order</span>
                        <h2>62,5461</h2>
                    </div>
                </CardHeader>
                <CardBody className="pt-0 ps-2 pe-2">
                    <div className='offline-chart'>
                        <ReactApexChart options={OfflineOrdersChart} series={OfflineOrdersChart.series} type="area" height={172} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default OfflineOrders
