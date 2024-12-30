import { toast } from "react-hot-toast";

const ShowError = () => {
  return toast.error("Please fill all fields before pressing next button");
};

export default ShowError;
