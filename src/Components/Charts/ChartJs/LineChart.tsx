import { Card, CardBody, Col } from "reactstrap";
import { ChartJSLineChart } from "@/Constant";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LineChartData, LineChartDataOption } from "@/Data/Charts/ChartJs";

const LineChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartJSLineChart} />
        <CardBody className="chart-block">
          <Line id="myLineCharts" data={LineChartData} options={LineChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChart;
