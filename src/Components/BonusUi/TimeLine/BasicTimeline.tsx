import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTimelines } from "@/Constant";
import { BasicTimeLineData, BasicTimeLineDataList } from "@/Data/BonusUi/Timeline";
import { Card, CardBody, Col } from "reactstrap";

const BasicTimeline = () => {
  return (
    <Col xl={6} className="notification main-timeline">
      <Card>
        <CommonCardHeader title={BasicTimelines} span={BasicTimeLineData} />
        <CardBody className="dark-timeline mb-0">
          <ul>
            {BasicTimeLineDataList?.map(({ color, date, time, title, span }, index) => (
              <li className="d-flex" key={index}>
                <div className={`timeline-dot-${color}`}></div>
                <div className="w-100 ms-3">
                  <p className="d-flex justify-content-between mb-2">
                    <span className="date-content light-background txt-dark">{date}</span>
                    <span>{time}</span>
                  </p>
                  <h6>{title}<span className="dot-notification"></span></h6>
                  <p className="f-light">{span}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTimeline;
