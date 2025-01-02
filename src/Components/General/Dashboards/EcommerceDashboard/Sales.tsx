import { ImagePath } from '@/Constant'
import { SalesData } from '@/Data/Dashboards/Ecommerce'
import Image from 'next/image'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import DashboardCommonHeader from '../Common/DashboardCommonHeader'

const Sales = () => {
    return (
        <>
            {SalesData?.map((card, index) => (
                <Col xl={3} sm={6} key={index}>
                    <Card>
                        <div className="daily-revenue-card">
                            <DashboardCommonHeader title={card.title} />
                        </div>
                        <CardBody className={`pb-0 total-sells${card.class}`}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="flex-shrink-0">
                                    <Image src={`${ImagePath}/dashboard-2/icon/${card.icon}1.png`} alt={card.title} width={28} height={28} priority/>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center gap-2">
                                        <h2>{card.value}</h2>
                                        <div className="d-flex total-icon">
                                            <p className={`mb-0 up-arrow bg-light-${card.color}`}>
                                                <i className={`fa fa-arrow-up text-${card.color}`} />
                                            </p>
                                            <span className={`f-w-500 font-${card.color}`}>{card.percentage}%</span>
                                        </div>
                                    </div>
                                    <p className="text-truncate">Compared to {card.month} 2023</p>
                                </div>
                            </div>
                            <ReactApexChart options={card.chartOptions} series={card.chartOptions.series} type="area" height={90} />
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}

export default Sales
