import { Tag,Edit2, Link as Links, Share2, Trash2 } from "react-feather";
import { Href } from "@/Constant";
import { DescriptionBookMarkPropsType } from "@/Types/Bookmark";
import Link from "next/link";

const DescriptionData :React.FC<DescriptionBookMarkPropsType> = ({ data, onHandleClick, removeFromBookmark}) => {
  const { title, website_url, id } = data;
  
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h5 className="title_0">{title}</h5>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul>
            <li><Link href={Href} onClick={() => onHandleClick(data)}><Edit2 /></Link></li>
            <li><Link href={Href}><Links /></Link></li>
            <li><Link href={Href}><Share2 /></Link></li>
            <li><Link href={Href} onClick={() => removeFromBookmark(id)}><Trash2 /></Link></li>
            <li className="text-end"><Link href={Href}><Tag /></Link></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{data.desc}</p>
          <span className="collection_0">{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionData;
