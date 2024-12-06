import SVG from '@/CommonComponents/SVG';
import { ImagePath } from '@/Constant';
import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { addToFavorites, handleEnvelope, handleInterview, removeItems } from '@/Redux/Reducer/LetterBoxSlice';
import { CommonDataType } from '@/Types/LetterBox';
import Image from 'next/image';
import { Badge, Input, Label } from 'reactstrap';

const EmailSidebarContent :React.FC<CommonDataType> = ({data,ids}) => {
  const {faIcon } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch()
  const handleValue= ()=> dispatch(handleInterview(true))
  const handleRemoveEmail = (id:number) => {
    dispatch(removeItems(id));    
  }

    return (
      <>
        <div className="inbox-user">
          <div className="form-check form-check-inline m-0">
            <Input className={`checkbox-${data.color}`} name="emailCheckbox" id={`emailCheckbox${ids}`} type="checkbox" />
            <Label check for={`emailCheckbox${ids}`} />
          </div>
          <div onClick={() => dispatch(addToFavorites(data))}>
            <SVG className={`important-mail ${data.star ? "active" : ""}`} iconId="fill-star"/>
          </div>
          <div className="rounded-border">
            {data.image && <Image height={32} width={32} priority src={`${ImagePath}/user/${data.image}`} alt="user" />}
            {data.shortName && <div className={data.color === "success" ? "circle-success" : ""}>
              <p className={`txt-${data.color}`}>{data.shortName}</p>
            </div>}
          </div>
          <p>{data.name}</p>
        </div>
        <div className="inbox-message">
          <div className="email-data" onClick={handleValue}>
            <span>
              {data.message}
              <span>{data.subMessage}</span>
            </span>
            <div className="inbox-width d-flex gap-2">
              {data.badge &&
                data.badge.map((item, i) => (
                  <Badge color={`light-${item.color}`} className={`m-0 text-light-${item.color === "light" ? "light-dark" : item.color }`} key={i}>{item.title}</Badge>
              ))}
            </div>
          </div>
          <div className="email-timing">
            <span>{data.time}</span>
          </div>
          <div className="email-options">
            <i className={`fa fa-envelope-o envelope-1 ${!faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(true))}/>
            <i className={`fa fa-envelope-open-o envelope-2 ${ faIcon ? "show" : "hide"}`} onClick={() => dispatch(handleEnvelope(false))} />
            <i className="fa fa-trash-o trash-3" onClick={()=>handleRemoveEmail(data.id)} />
            <i className="fa fa-print" />
          </div>
        </div>
      </>
    );
}

export default EmailSidebarContent