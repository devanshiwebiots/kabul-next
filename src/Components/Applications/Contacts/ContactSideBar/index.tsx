import { Button, Card, CardBody } from "reactstrap";
import { ContactFilter, ImagePath } from "@/Constant";
import { ContactSidebarCallbackProp } from "@/Types/Contact";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setContactFilter } from "@/Redux/Reducer/ContactSlice";
import NavComponent from "./NavComponent";
import Image from "next/image";

const ContactSideBar :React.FC<ContactSidebarCallbackProp> = ({ callback }) => {
  const { contactFilter } = useAppSelector((state) => state.contact);
  const dispatch = useAppDispatch();

  return (
    <div className="md-sidebar">
      <Button tag="a" color="primary" className="md-sidebar-toggle" onClick={() => dispatch(setContactFilter())}>{ContactFilter}</Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${contactFilter ? "open" : ""}`}>
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <div className="d-flex">
                  <div className="d-flex-size-email">
                    <Image height={48} width={48} priority className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`}  alt="" />
                  </div>
                  <div className="flex-grow-1">
                    <h4>MARK JENCO</h4>
                    <p>Markjecno@gmail.com</p>
                  </div>
                </div>
                <NavComponent callbackActive={callback} />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactSideBar;
