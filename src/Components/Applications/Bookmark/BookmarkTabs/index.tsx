import { useAppSelector } from "@/Redux/Hooks";
import { TabContent } from "reactstrap";
import DataLoopTab from "./DataLoopTab";
import FavDataTab from "./FavDataTab";
import BookmarkTabData from "../Common/BookmarkTabData";
import { Business, Holidays, Important, Newsletter, Notification, Organization, SharedWithMe } from "@/Constant";
import MyBookmarkTab from "./MyBookmarkTab"; 
import EditBookmarkModal from "./EditBookmarkModal";

const BookmarksTabs = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabContent activeTab={activeTabs}>
      <DataLoopTab />
      <FavDataTab />
      <BookmarkTabData tabId="3" title={SharedWithMe} />
      <MyBookmarkTab/>
      <BookmarkTabData tabId="5" title={Notification} />
      <BookmarkTabData tabId="6" title={Newsletter} />
      <BookmarkTabData tabId="7" title={Business} />
      <BookmarkTabData tabId="8" title={Holidays} />
      <BookmarkTabData tabId="9" title={Important} />
      <BookmarkTabData tabId="10" title={Organization} />
      <EditBookmarkModal/>
    </TabContent>
  );
};
export default BookmarksTabs;
