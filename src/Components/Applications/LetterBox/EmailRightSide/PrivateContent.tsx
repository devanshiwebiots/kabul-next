import { TabPane } from "reactstrap";
import { PrivateEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const PrivateContent = () => {
  return (
    <TabPane tabId="7">
      <div className="mail-body-wrapper">
        <ul>
          {PrivateEmailData?.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default PrivateContent;
