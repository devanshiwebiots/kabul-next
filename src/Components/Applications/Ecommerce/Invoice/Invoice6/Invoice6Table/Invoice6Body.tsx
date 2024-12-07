import { InvoiceSixData } from "@/Data/Ecommerce";
import { Label } from "reactstrap";

const Invoice6Body = () => {
  return (
    <>
      {InvoiceSixData?.map((data,i)=>(
        <tr key={i}>
          <td>
            <Label>{data.title}</Label>
            <p className="m-0">{data.detail}</p>
          </td>
          <td><p className="itemtext">{data.hours}</p></td>
          <td><p className="itemtext">$75</p></td>
          <td><p className="itemtext">${data.total}.00</p></td>
        </tr>
      ))}
      <tr>
        <td><p className="itemtext" /></td>
        <td><p className="m-0">HST</p></td>
        <td><p className="m-0">13%</p></td>
        <td><p className="m-0">$419.25</p></td>
      </tr>
    </>
  );
};

export default Invoice6Body;
