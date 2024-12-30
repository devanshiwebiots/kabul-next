import { Href, ImagePath } from "@/Constant";
import Link from "next/link";
import { Gallery, Item } from "react-photoswipe-gallery";

const MyGallery = () => {
  return (
    <Gallery>
      {[...Array(12)]?.map((_, index) => (
        <figure className='col-xl-3 col-md-4 col-sm-6 m-0' key={index}>
          <Item original={`${ImagePath}/big-lightgallry/0${index+1}.jpg`} width='1500' height='850'>
            {({ ref, open }) => (
              <Link href={Href} onClick={open}>
                <img className='img-thumbnail mb-4 p-2' ref={ref as unknown as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/big-lightgallry/0${index+1}.jpg`} alt='image' />
              </Link>
            )}
          </Item>
        </figure>
      ))}
    </Gallery>
  );
};

export default MyGallery;