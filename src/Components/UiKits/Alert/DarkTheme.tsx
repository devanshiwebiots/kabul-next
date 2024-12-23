import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, LinkColorDarkTheme } from "@/Constant";
import { ThemeLists, ThemeList, LinkColorData } from "@/Data/UiKits/Alert";
import Link from "next/link";
import { Fragment } from "react";
import { Alert, Card, CardBody, Col, Row } from "reactstrap";

const DarkTheme = () => {
  return (
    <Col xl={12}>
      <Card>
        <CommonCardHeader title={LinkColorDarkTheme} span={LinkColorData} />
        <CardBody>
          <Row>
            <Col xl={6}>
              {ThemeList?.map((item, index) => (
                <Fragment key={index}>
                  <p className="mb-0 f-w-500 text-capitalize">{item} Alert</p>
                  <Alert color={item} className="dark">
                    <p>This is a <Link className="alert-link text-white" href={Href}>{item} alert</Link> with an example link.Check it out.</p>
                  </Alert>
                </Fragment>
              ))}
            </Col>
            <Col xl={6}>
              {ThemeLists?.map(({ color, className }, index) => (
                <Fragment key={index}>
                  <p className="mb-0 f-w-500 text-capitalize">{color} Alert</p>
                  <Alert color={color} className="dark">
                    <p>This is a <Link className={`alert-link text-${className ? className : "light"} text-lowercase`} href={Href}>{color} Alert</Link> with an example link.Check it out.
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

export default DarkTheme;