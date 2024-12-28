import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, VariationTimelines } from "@/Constant";
import { VariationTimeLineData, VariationTimeLineDataList } from "@/Data/BonusUi/Timeline";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const VariationTimeline = () => {
  return (
    <Col xxl={4} xl={5} className="notification box-col-12">
      <Card>
        <CommonCardHeader title={VariationTimelines} span={VariationTimeLineData} />
        <CardBody className="dark-timeline">
          <ul className="simple-list">
            {VariationTimeLineDataList?.map((data, index) => (
              <li className={`d-flex ${data.className}`} key={index}>
                <div className={`activity-dot-${data.color}`}></div>
                <div className="w-100 ms-3">
                  <p className="d-flex justify-content-between">
                    <span className="date-content light-background txt-dark">{data.date}</span>
                    <span>{data.time}</span>
                  </p>
                  <h6 className="f-w-700">
                    {data.title}
                    <span className="dot-notification"></span>
                  </h6>
                  <span className={data.subTitleClass ? data.subTitleClass : ""}>{data.subTitle}</span>
                  {data.image && (
                    <div className="recent-images mb-2">
                      <ul>
                        {data.image.map((item, index) => (
                          <li key={index}>
                            <div className="recent-img-wrap">
                              <Image height={40} width={40} priority src={`${ImagePath}/dashboard-2/product/${item}.png`} className="me-0" alt="chair" />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationTimeline;
