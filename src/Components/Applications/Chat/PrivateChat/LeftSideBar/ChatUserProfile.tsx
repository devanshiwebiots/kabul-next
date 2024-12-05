import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { changeChat, createNewChatAsync } from "@/Redux/Reducer/ChatSlice";
import { AllMemberType } from "@/Types/Chat";
import Image from "next/image";
import { Badge, Col } from "reactstrap";

const ChatUserProfile = () => {
  const { members, selectedUser, currentUser, chats } = useAppSelector((state) => state.chat);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useAppDispatch();
  const changeChatClick = (selectUser: number) => {
    const currentUserId = currentUser?.id;
    const currentChat = chats.find((x: { users: number[] }) => currentUser?.id !== undefined && x.users.includes(currentUser?.id) && x.users.includes(selectUser));
    if (currentChat) {
      dispatch(changeChat(selectUser));
    } else {
      dispatch(createNewChatAsync({ currentUserId, selectUser, chats }));
    }
  };
  return (
    <>
      {members?.length > 0 ? (
        <ul className='chats-user overflow-y-auto custom-scrollbar'>
          {members?.filter((x: AllMemberType) => x.id !== currentUser?.id).map((item: AllMemberType, id: number) => (
              <li className={`common-space ${activeChat === item.id ? "active" : ""}`} key={id} onClick={() => changeChatClick(item.id)}>
                <div className='chat-time'>
                  <div className='active-profile'>
                    <Image height={33} width={33} className='img-fluid rounded-circle' src={`${ImagePath}/${item.image}`} alt='user' />
                    <div className={`status bg-${item.online}`} />
                  </div>
                  <div>
                    <span>{item.name}</span>
                    <p>{item.status}</p>
                  </div>
                </div>
                <div>
                  <p>{item.time} </p>
                  {item.badge && (
                    <Badge color='transparent' className='bg-success text-white'>15</Badge>
                  )}
                </div>
              </li>
            ))}
        </ul>
      ) : (
        <Col sm={12}>
          <div>
            <div className='search-not-found text-center p-5'>
              <p>Sorry, Not Found Any Contact</p>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default ChatUserProfile;
