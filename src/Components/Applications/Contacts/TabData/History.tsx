import { ContactCreated, ContactHistory, Href } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setHistory } from "@/Redux/Reducer/ContactSlice";
import Link from "next/link";
import { ModalHeader } from "reactstrap";

const HistoryClass = () => {
  const { history } = useAppSelector((state)=>state.contact)
  const dispatch = useAppDispatch()

  return (
    <div id="right-history" className={history ? "show":""}>
      <ModalHeader className="modal-title" toggle={()=>dispatch(setHistory())}>{ContactHistory}</ModalHeader>
      <div className="history-details">
        <div className="text-center d-flex justify-content-evenly">
          <i className="icofont icofont-ui-edit"></i>
          <p>Contact has not been modified yet.</p>
        </div>
        <div className="d-flex">
          <i className="icofont icofont-star me-3"></i>
          <div className="flex-grow-1 mt-0">
            <h3 className="mt-0">{ContactCreated}</h3>
            <p className="mb-0">Contact is created via mail</p>
            <span className="f-12">Sep 10, 2023 4:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryClass;
