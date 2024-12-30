import { Card, CardBody, Col } from "reactstrap";
import { ChartJSDoughnutChart } from "@/Constant";
import { Doughnut } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DoughnutChartData, DoughnutChartDataOption } from "@/Data/Charts/ChartJs";

const DoughnutChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartJSDoughnutChart} />
        <CardBody className="chart-block">
          <Doughnut id="myDoughnutGraph" data={DoughnutChartData} options={DoughnutChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChart;
