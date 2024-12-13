import { Tag,Edit2, Link as Links, Share2, Trash2 } from "react-feather";
import { Href } from "@/Constant";
import { FavDescriptionDataProp } from "@/Types/Bookmark";
import Link from "next/link";

const FavDescriptionData :React.FC<FavDescriptionDataProp> = ({ myBookData}) => {
  const { title, website_url,collection,desc } = myBookData;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h6 className="title_0">{title}</h6>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul className="simple-list flex-row">
            <li><Link href={Href}><Edit2 /></Link></li>
            <li><Link href={Href}><Links /></Link></li>
            <li><Link href={Href}><Share2 /></Link></li>
            <li><Link href={Href}><Trash2 /></Link></li>
            <li className="text-end"><Link href={Href}><Tag /></Link></li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_0">{desc}</p>
          <span className="collection_0">{collection}</span>
        </div>
      </div>
    </div>
  );
};

export default FavDescriptionData;
