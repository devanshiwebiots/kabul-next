import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { SwitchSizingswithIcons } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchSizingDataList, SwitchSizingDatawithIcons } from "@/Data/Forms";

const SwitchSizingwithIcons = () => {
    return (
        <Col md={12}>
            <Card>
                <CommonCardHeader title={SwitchSizingswithIcons} span={SwitchSizingDatawithIcons} />
                <CardBody className="common-flex switch-wrapper">
                    {SwitchSizingDataList?.map(({ label, flexClass, defaultChecked, disabled }, index) => (
                        <div className="d-flex" key={index}>
                            <Label className="col-form-label m-r-10" check>{label}</Label>
                            <div className={`flex-grow-1 text-end ${flexClass} icon-state`}>
                                <Label className="switch">
                                    <Input type="checkbox" defaultChecked={defaultChecked} disabled={disabled} />
                                    <span className="switch-state"></span>
                                </Label>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    );
};

export default SwitchSizingwithIcons;
