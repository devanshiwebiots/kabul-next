import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import TabsContent from "./TabsContent";
import { ClothsDetailsData } from "@/Data/Ecommerce";

const ClothsDetails = () => {

  const [activeTab, setActiveTab] = useState(1);
  return (
    <Col sm={12}>
      <Nav pills tabs className="nav-primary mb-0">
        {ClothsDetailsData?.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabsContent activeTab={activeTab} />
    </Col>
  );
};

export default ClothsDetails;
