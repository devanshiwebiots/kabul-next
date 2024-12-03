import { Col, Form, Input, Label, Row } from "reactstrap";
import { ChooseYourCurrency, InitialCost, ProductStocks, SellingPrice } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducer/AddProductSlice";
import TypesOfProduct from "./TypesOfProduct";

const TabFourContent = () => {
    const dispatch = useAppDispatch()
    return (
      <div className="sidebar-body">
        <Form className="price-wrapper">
          <Row className="g-3 custom-input">
            <Col sm={6}>
              <Label check>{InitialCost}<span className="txt-danger">*</span></Label>
              <Input type="number" name="initialCost" onChange={(e)=> dispatch(setFormValue({name:"initialCost",value:e.target.value}))}/>
            </Col>
            <Col sm={6}>
              <Label check>{SellingPrice} <span className="txt-danger">*</span></Label>
              <Input type="number" name="initialPrice" onChange={(e)=>dispatch(setFormValue({name:"initialPrice",value:e.target.value}))}/>
            </Col>
            <Col sm={6}>
              <Label check>{ChooseYourCurrency}</Label>
              <Input type="select" defaultValue="Dollar $" name="select" onChange={(e)=>dispatch(setFormValue({name:"select",value:e.target.value}))} >
                <option>Dollar $</option>
                <option>Euro €</option>
                <option>Rupees ₹</option>
                <option>British pounds £</option>
                <option>Russian Ruble ₽</option>
                <option>Japanese Yen ¥</option>
                <option>Singapore Dollar $</option>
              </Input>
            </Col>
            <Col sm={6}>
              <Label check>{ProductStocks}<span className="txt-danger">*</span></Label>
              <Input type="number" name="productStocks" onChange={(e)=>dispatch(setFormValue({name:"productStocks",value:e.target.value}))}/>
            </Col>
            <TypesOfProduct />
          </Row>
        </Form>
      </div>
    );
}

export default TabFourContent
