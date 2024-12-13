import RatioImage from "@/CommonComponents/RatioImage";
import { CurrentCartHeading, ImagePath, Price, Product, ProductDetails } from "@/Constant";
import { CurrentCartData, CurrentCartFooter } from "@/Data/Forms";
import { Col, Table } from "reactstrap";

const CurrentCart = () => {
  return (
    <Col xl={4}>
      <div className="shipping-info custom-current">
        <h4>{CurrentCartHeading}</h4>
        <div className="overflow-auto theme-scrollbar">
          <Table striped>
            <thead>
              <tr>
                <th scope="col">{Product}</th>
                <th scope="col">{ProductDetails}</th>
                <th scope="col">{Price}</th>
              </tr>
            </thead>
            <tbody>
              {CurrentCartData?.map((data, index) => (
                <tr key={index}>
                  <td><RatioImage src={`${ImagePath}/${data.imagePath}.png`} alt="product" /></td>
                  <td>
                    <div >
                      <h6>{data.productName}</h6>
                      <span>{data.productSum}</span>
                    </div>
                  </td>
                  <td><p>${data.price}</p></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              {CurrentCartFooter?.map((data, index) => (
                <tr key={index}>
                  <td>{data.footerTittle}</td>
                  <td colSpan={2}>${data.price} </td>
                </tr>
              ))}
            </tfoot>
          </Table>
        </div>
      </div>
    </Col>
  );
};

export default CurrentCart;
