import SVG from "@/CommonComponents/SVG";
import { Inbox } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Badge, Nav, NavItem, NavLink } from "reactstrap";
import { LetterBoxNavType } from "@/Types/LetterBox";
import { LetterBoxSidebar } from "@/Data/LetterBox";
import AddLabel from "./AddLabel";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const {inboxEmail} = useAppSelector((state)=>state.letterBox)
  let starBadges = inboxEmail.filter((data)=> data.star === true && 1)

  return (
    <Nav pills className="main-menu email-category">
      {LetterBoxSidebar?.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={`border-0 ${navId === data.id ? "active" : ""}`} onClick={() => setNavId(data.id)}>
            <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badge color="link">{data.title === Inbox ? inboxEmail.length : starBadges.length}</Badge>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;
