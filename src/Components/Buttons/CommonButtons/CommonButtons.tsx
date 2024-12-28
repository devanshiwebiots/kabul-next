import { Button, Card, CardBody } from "reactstrap";
import CommonCardHeading from "./CommonCardHeading";
import { Fragment } from "react";
import { DefaultType } from "@/Types/Buttons";

const CommonButtons: React.FC<DefaultType> = ({ commonButtonsData, title, subTitle, className, raised }) => {
  return (
    <Card>
      <CommonCardHeading smallHeading={title} span={subTitle} />
      <CardBody>
        <div className="btn-showcase">
          {commonButtonsData?.map((data, index) => (
            <Fragment key={index}>
              <Button className={`${className ? className : ""} ${data.className ? data.className : ""} ${raised ? `btn-air-${data.color}` : ""} ${raised ? `btn-air-${data.colorTag}` : ""}`} outline={data.outline} active={data.active} disabled={data.disabled} size={data.size ? data.size : ""} id={data.id ? data.id : ""} color={data.color}>
                {data.title}
              </Button>
            </Fragment>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default CommonButtons;
