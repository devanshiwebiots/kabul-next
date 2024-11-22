import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { WeeklyRevenueGrowth } from '@/Constant';
import { RevenueGrowthChart } from '@/Data/Dashboards/Charts';
import { RevenueGrowthData } from '@/Data/Dashboards/Default';
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Progress } from 'reactstrap';

const RevenueGrowth = () => {
    return (
        <Col xl={6} md={6}>
            <Card className="monthly-growth">
                <CommonCardHeader title={WeeklyRevenueGrowth} />
                <CardBody className="pt-0">
                    <ReactApexChart options={RevenueGrowthChart} series={RevenueGrowthChart.series} type="bar" height={260} />
                    <ul className="d-flex">
                        {RevenueGrowthData?.map((item, index) => (
                            <li key={index}>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <h3>$ {item.value}</h3>
                                        <span>{item.label}</span>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <h4>1,00,00</h4>
                                        <span>{item.percentage}% goal reached</span>
                                    </div>
                                </div>
                                <Progress value={70} color={item.color} />
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Col>

    )
}

export default RevenueGrowth
