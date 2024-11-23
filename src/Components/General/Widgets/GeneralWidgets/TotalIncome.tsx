import { TotalIncomeData } from '@/Data/Widgets/General'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col, Row } from 'reactstrap'

const TotalIncome = () => {

    return (
        <Col lg={4}>
            <Row>
                {TotalIncomeData?.map((item, index) => (
                    <Col lg={12} sm={6} className="col-12 box-col-12" key={index}>
                        <Card className="total-earning">
                            <CardBody className={index === 1 ? 'pb-0' : ''}>
                                <Row>
                                    <Col sm={7} className="box-col-7">
                                        <div className="d-flex">
                                            <h3 className="font-primary">{item.title}</h3>
                                        </div>
                                        <h5>${item.value}</h5>
                                        <span>+ {item.change}% than last week</span>
                                    </Col>
                                    <Col sm={5} className="box-col-5 p-0">
                                        <ReactApexChart
                                            options={item.chartOptions}
                                            series={item.chartOptions.series}
                                            type={item.chartType}
                                            height={item.chartHeight}
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default TotalIncome
