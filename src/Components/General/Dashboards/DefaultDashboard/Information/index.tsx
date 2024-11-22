import SVG from '@/CommonComponents/SVG';
import { Info } from '@/Constant';
import { TabsData } from '@/Data/Dashboards/Default';
import { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import DashboardCommonHeader from '../../Common/DashboardCommonHeader';
import NotificationList from './NotificationList';

const Information = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab: string) => activeTab !== tab && setActiveTab(tab);

  return (
    <Col xl={4} md={6} className="box-col-6">
      <Card className="notifications-tabs">
        <DashboardCommonHeader title={Info} />
        <CardBody>
          <div className="d-flex header-tab">
            <Nav tabs className="border-tab mb-0">
              {TabsData.map(({ id, title, count }) => (
                <NavItem key={id} id="bottom-tab">
                  <NavLink className={`nav-border tab-primary pt-0 ${activeTab === id ? "active" : ""}`} onClick={() => toggle(id)}>
                    {title} {count && <span className="ms-2 bg-primary">{count}</span>}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <h6>Mark all as read</h6>
          </div>
          <TabContent activeTab={activeTab} className="content-tab">
            {TabsData.map(({ id, data }) => (
              <TabPane tabId={id} key={id}>
                {data.map((item, index) => (<NotificationList key={index} {...item} />))}
                {id === "1" && (
                  <div className="figma-icon">
                    <SVG className="flex-shrink-0" iconId="file" />
                    <div className="flex-shrink-0"><h6>Tet_Dark_Mode_L103.fig</h6><span>2.4 MB</span></div>
                  </div>
                )}
              </TabPane>
            ))}
          </TabContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Information;

