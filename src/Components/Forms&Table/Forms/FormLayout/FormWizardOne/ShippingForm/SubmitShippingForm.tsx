import RatioImage from "@/CommonComponents/RatioImage";
import { Href, ImagePath, OrderConfirmed, OrderID } from "@/Constant";
import Link from "next/link";

const SubmitShippingForm = () => {
  return (
      <div className="order-confirm">
        <RatioImage src={`${ImagePath}/dashboard/successful.gif`} alt="popper"/>
        <h5>{OrderConfirmed}</h5>
        <p className="mb-0">An email with your orders specifics will be sent to you as order confirmation.</p>
        <p className="text-center f-w-600 mt-2">{OrderID}:
          <Link className="text-decoration-underline" href={Href}>GE34598</Link>
        </p>
      </div>
  );
};

export default SubmitShippingForm;