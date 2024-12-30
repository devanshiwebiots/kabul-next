import { Card, CardBody, Col } from "reactstrap";
import { ChartJSLineGraph } from "@/Constant";
import { Line } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LineGraphChartData, LineGraphChartDataOption } from "@/Data/Charts/ChartJs";

const LineGraph = () => {
  return (
    <Col xl={6} md={12} className="box-col-6">
      <Card>
        <CommonCardHeader title={ChartJSLineGraph} />
        <CardBody className="chart-block">
            <Line id="myGraph" data={LineGraphChartData} options={LineGraphChartDataOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineGraph;
