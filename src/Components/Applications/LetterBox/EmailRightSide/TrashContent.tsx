import { TabPane } from "reactstrap";
import { TrashEmailData } from "@/Data/LetterBox";
import EmailSidebarContent from "./Common/EmailSidebarContent";

const TrashContent = () => {
  return (
    <TabPane tabId="5">
      <div className="mail-body-wrapper">
        <ul>
          {TrashEmailData?.map((data,i)=>(
            <li className="inbox-data" key={i}>
              <EmailSidebarContent data={data} ids={i}/> 
            </li>
          ))}
        </ul>
      </div>
    </TabPane>
  );
};

export default TrashContent;
