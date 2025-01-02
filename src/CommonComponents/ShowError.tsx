import { toast } from "react-hot-toast";

const ShowError = () => {
  return toast.error("Please fill all fields before pressing Next button");
};

export default ShowError;
