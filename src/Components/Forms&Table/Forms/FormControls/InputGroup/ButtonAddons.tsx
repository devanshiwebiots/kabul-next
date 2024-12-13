import { Button, Card, CardBody, Col, Input, InputGroup } from "reactstrap";
import { AddonPlaceHolder, ButtonAddon, SubmitButtonAddon, SubmitButtonAddonPlaceHolder } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ButtonAddonData } from "@/Data/Forms";

const ButtonAddons = () => {
  return (
    <Col md={6}>
      <Card>
        <CommonCardHeader title={ButtonAddon} span={ButtonAddonData} />
        <CardBody className="card-wrapper input-group-wrapper">
          <InputGroup>
            <Button color='primary' outline>$ 25</Button>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={SubmitButtonAddonPlaceHolder} id="button-addon2" />
            <Button color='warning' outline>{SubmitButtonAddon}</Button>
          </InputGroup>
          <InputGroup>
            <Button ><span>€</span></Button>
            <Button color='warning'>0.0114419</Button>
            <Input type="text" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder={AddonPlaceHolder} />
            <Button ><span>₹</span></Button>
            <Button color='warning'>500</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default ButtonAddons;
