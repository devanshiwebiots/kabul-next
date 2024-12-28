import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Dropdown, DropdownLink, Href, NestingButton } from "@/Constant";
import { NestingData, NestingDataList } from "@/Data/Buttons/ButtonGroup";
import { Button, ButtonGroup, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

const Nesting = () => {
  return (
    <Col lg={6}>
      <Card className="height-equal">
        <CommonCardHeader title={NestingButton} span={NestingData} />
        <CardBody className="btn-group-wrapper">
          <div className="m-b-30">
            <ButtonGroup>
              <Button color="primary"><i className="fa fa-bold"></i></Button>
              <Button color="secondary"><i className="fa fa fa-italic"></i></Button>
              <ButtonGroup>
                <UncontrolledDropdown>
                  <DropdownToggle caret color="light" className="done">{Dropdown}</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                    <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                    <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                    <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </ButtonGroup>
            </ButtonGroup>
          </div>
          {NestingDataList?.map((item, index) => (
            <div className="m-b-30" key={index}>
              <ButtonGroup>
                <Button color="primary" size={item}><i className="fa fa-bold"></i></Button>
                <Button color="secondary" size={item}><i className="fa fa fa-italic"></i></Button>
                <Button color="success" size={item}><i className="fa fa-file-image-o"></i></Button>
                <Button color="info" size={item}><i className="fa fa-paperclip"></i></Button>
              </ButtonGroup>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Nesting;
