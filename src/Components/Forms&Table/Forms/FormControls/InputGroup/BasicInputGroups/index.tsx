import { Card, Col } from "reactstrap";
import { BasicInputGroup } from "@/Constant";
import BasicInputGroupsCardBody from "./BasicInputGroupsCardBody";
import BasicInputGroupsCardFooter from "./BasicInputGroupsCardFooter";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicInputGroupData } from "@/Data/Forms";

const BasicInputGroups = () => {
  return (
    <Col xl={6}>
      <Card>
        <CommonCardHeader title={BasicInputGroup} span={BasicInputGroupData} />
        <BasicInputGroupsCardBody />
        <BasicInputGroupsCardFooter />
      </Card>
    </Col>
  );
};

export default BasicInputGroups;
