import CommonCardHeader from "@/CommonComponents/CommonCardHeader"
import { BadgesAsPartButtons } from "@/Constant"
import { BadegButtonData, BadgeButtonList } from "@/Data/UiKits/TagAndPills"
import { Fragment } from "react"
import { Badge, Button, Card, CardBody, Col } from "reactstrap"

const BadgeAsPartButtons = () => {
    return (
        <Col sm={12} xl={6}>
            <Card className="badges-custom-card">
                <CommonCardHeader title={BadgesAsPartButtons} span={BadegButtonData} />
                <CardBody>
                    <div className="badge-spacing flex-column align-items-start">
                        {BadgeButtonList?.map((item, index) => (
                            <Fragment key={index}>
                                <Button color={item.className} className={`d-flex align-items-center ${item.className === "warning" ? "text-dark" : ""}`}>{item.title}
                                    <Badge color="light" className="rounded-circle btn-p-space badge-light text-dark ms-2">{item.icon}</Badge></Button>
                            </Fragment>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}

export default BadgeAsPartButtons
