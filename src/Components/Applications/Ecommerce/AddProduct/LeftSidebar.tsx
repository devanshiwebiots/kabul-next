import SVG from "@/CommonComponents/SVG";
import { AddProductNav } from "@/Data/Ecommerce";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setNavId } from "@/Redux/Reducer/AddProductSlice";
import { Col, Nav, NavItem, NavLink } from "reactstrap";

const LeftSidebar = () => {
  const { navId } = useAppSelector((state) => state.addProduct);
  const dispatch = useAppDispatch();

  return (
    <Col xxl={3} xl={4} className='box-col-4e sidebar-left-wrapper mb-2 add-product-tab'>
      <Nav pills className='sidebar-left-icons border-0' tabs>
        {AddProductNav?.map((data, i) => (
          <NavItem key={i}>
            <NavLink className='border-0' active={navId === (i+1) ? true : false} onClick={() => dispatch(setNavId(i+1))}>
              <div className='nav-rounded'>
                <div className='product-icons'>
                  <SVG className='stroke-icon' iconId={data.icon} />
                </div>
              </div>
              <div className='product-tab-content'>
                <h5>{data.title}</h5>
                <p>{data.detail}</p>
              </div>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
    </Col>
  );
};

export default LeftSidebar;
