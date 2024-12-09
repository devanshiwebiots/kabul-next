import { CommentsSocialPlaceholder, ImagePath } from "@/Constant";
import Image from "next/image";
import { Button, Input, InputGroup } from "reactstrap";

const CommentsBox = () => {
  return (
    <div className="comments-box">
     <div className="d-flex">
        <Image height={50} width={50} priority className="img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/1.jpg`}/>
        <div className="flex-grow-1">
          <InputGroup className="text-box">
            <Input className="input-txt-bx shadow-none" type="text" name="message-to-send" placeholder={CommentsSocialPlaceholder} />
            <div className="input-group-append">
              <Button color="transparent"><i className="fa fa-smile-o"></i></Button>
            </div>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default CommentsBox;
