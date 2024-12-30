import { Card, CardBody, Col } from "reactstrap";
import { ChartJSPolarChart } from "@/Constant";
import { PolarArea } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PolarChartData, PolarChartDataOption } from "@/Data/Charts/ChartJs";

const PolarChart = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartJSPolarChart} />
        <CardBody className="chart-block">
          <PolarArea id="myPolarGraph" data={PolarChartData} options={PolarChartDataOption} width={734} height={335} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChart;
