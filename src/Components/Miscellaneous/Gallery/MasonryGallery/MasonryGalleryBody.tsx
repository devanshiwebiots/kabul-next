import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import Masonry from "react-masonry-css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { CardBody } from "reactstrap";

const MasonryGalleryBody = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  return (
    <CardBody className="photoswipe-pb-responsive">
      <Gallery>
        <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
          {[...Array(15)].map((_, index) => (
            <figure key={index} className="m-0">
              <Item original={`${ImagePath}/masonry/${index+1}.jpg`} width="700" height="850">
                {({ ref, open }) => (
                  <Link href={Href} onClick={open}>
                    <img className="img-thumbnail mb-4" ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} loading="lazy" src={`${ImagePath}/masonry/${index+1}.jpg`} alt="images" />
                  </Link>
                )}
              </Item>
            </figure>
          ))}
        </Masonry>
      </Gallery>
    </CardBody>
  );
};

export default MasonryGalleryBody;