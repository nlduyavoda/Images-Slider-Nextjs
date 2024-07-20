import Image, { ImageProps } from "next/image.js";
import { Photo } from "../../../pages/collection/utils";

const ImageComponent = ({
  photo,
  ...props
}: Partial<ImageProps> & {
  photo: Photo;
}) => {
  return (
    <Image
      className="rounded-[20px]"
      src={photo.src.original}
      alt={photo.photographer}
      height={props.height || 500}
      width={props.width || 500}
    />
  );
};

export default ImageComponent;
