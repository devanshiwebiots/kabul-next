import { Bookmark, PlusCircle } from "react-feather";
import { Button, Nav } from "reactstrap";
import { Href, NewBookmark, Tags, Views } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { BookmarkSideData, BookmarkTagData } from "@/Data/Bookmark";
import { setAddModal, setTagModal, updateActiveTabs } from "@/Redux/Reducer/BookmarkTabSlice";
import BookmarkModal from "./ModalBookMark";
import ModalTag from "./ModalTag";
import Link from "next/link";

const NavTab = () => {
  const { activeTabs, bookMarkList } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const onHandleClick = (id: string) => { dispatch(updateActiveTabs(id)); };
  return (
    <Nav className="main-menu" role="tablist">
      <li>
        <Button block color="primary" className="badge-primary btn-mail" onClick={() => dispatch(setAddModal())}>
          <Bookmark className="me-2" />{NewBookmark}
          <BookmarkModal />
        </Button>
      </li>
      <li><span className="main-title f-w-700">{Views}</span></li>
      {BookmarkSideData?.map((data, index) => (
        <li key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.title} {data.title === "Favorites" && `(${bookMarkList.length})`}</span>
          </Link>
        </li>
      ))}
      <li><hr /></li>
      <li>
        <span className="main-title f-w-700">{Tags}
          <span className="pull-right" onClick={() => dispatch(setTagModal())}><Link href={Href}><PlusCircle /></Link></span>
        </span>
      </li>
      <ModalTag />
      {BookmarkTagData?.map((data, index) => (
        <li key={index}>
          <Link className={`show ${activeTabs === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.title}</span>
          </Link>
        </li>
      ))}
    </Nav>
  );
};

export default NavTab;