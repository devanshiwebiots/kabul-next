import { TotalChangeData } from '@/Data/Widgets'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'reactstrap'

const TotalChange = () => {
    return (
        <Row>
            {TotalChangeData?.map((data, index) => (
                <Col lg={4} md={12} className="box-col-4" key={index}>
                    <Card className="o-hidden">
                        <CardBody className="chart-widget-top">
                            <Row className="pb-0 m-0">
                                <Col xl={9} lg={8} xs={9} className="p-0">
                                    <h4 className="mb-2">{data.title}</h4>
                                    <h4>{data.value}</h4><span>Compare to last month</span>
                                </Col>
                                <Col xl={3} lg={4} xs={3} className="text-end p-0">
                                    <h6 className="txt-success">+65%</h6>
                                </Col>
                            </Row>
                            <ReactApexChart options={data.chartOptions} series={data.chartOptions.series} type={data.chartType} height={data.chartHeight} />
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default TotalChange
