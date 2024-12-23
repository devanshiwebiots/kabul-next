import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, LinkColorLightTheme } from "@/Constant";
import { ThemeList, LinkColorData, ThemeLists } from "@/Data/UiKits/Alert";
import Link from "next/link";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

const LightTheme = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={LinkColorLightTheme} span={LinkColorData} />
        <CardBody>
          <Row>
            <Col xl={6}>
              {ThemeList?.map((title, index) => (
                <Fragment key={index}>
                  <p className="mb-0 f-w-500 text-capitalize">{title} Light Alert</p>
                  <Alert color="transparent" className={`alert-light-${title} border-0`}>
                    <p className={`txt-${title}`}>This is a <Link className={`alert-link txt-${title}`} href={Href}>{title} alert
                    </Link> with an example link. Check it out.
                    </p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
            <Col xl={6}>
              {ThemeLists?.map(({ color, className }, index) => (
                <Fragment key={index}>
                  <p className="mb-0 f-w-500 text-capitalize">{className ? "White" : color} Light Alert</p>
                  <Alert color={`light-${color}`}>
                    <p className={`txt-${className ? className : color}`}>This is a <Link className={`alert-link text-lowercase txt-${className ? className : color}`} href={Href}>{color} alert</Link> with an example link. Check it out.
                    </p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightTheme;
