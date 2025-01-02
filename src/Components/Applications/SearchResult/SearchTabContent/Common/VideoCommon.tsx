import { Href } from "@/Constant";
import { InformationCommonPropsType } from "@/Types/SearchResult";
import Link from "next/link";

const VideoCommon: React.FC<InformationCommonPropsType> = ({ item }) => {
    return (
        <div className="d-flex info-block" key={item.id}>
            <iframe className="me-3" width="200" height="100" src={item.videoLink} title="videos"></iframe>
            <div className="flex-grow-1">
                <Link href={Href}>{item.url}</Link>
                <h5>{item.title}</h5>
                <div className="star-ratings">
                    <ul className="search-info">
                        <li>3 stars</li>
                        <li>590</li>
                        <li>Theme</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default VideoCommon
