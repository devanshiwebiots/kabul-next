import { TabPane } from "reactstrap";
import { WorkEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const WorkContent = () => {
  return (
    <TabPane tabId="6">
      <div className="mail-body-wrapper">
        <ul>
          {WorkEmailData?.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default WorkContent;
