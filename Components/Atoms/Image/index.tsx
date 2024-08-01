import Image, { ImageProps } from "next/image"
import { Photo } from "../../../pages/collection/utils"
import classNames from "classnames"

export type ImageComponentProps = {
  photo: Photo
  active: boolean
}

const ImageComponent = ({
  photo,
  active,
  ...props
}: Partial<ImageProps> & ImageComponentProps) => {
  if (active) {
    console.log({
      ...photo,
      active,
    })
  }

   const imageClass = classNames(
    'relative transition-all duration-300',
    {
      'h-[60vh] w-[60vw]': active,
      'h-[35vh] w-[35vw]': !active,
    }
  );
  return (
    <div
      className={imageClass}
    >
      <Image
        src={photo.src.original}
        alt={photo.photographer}
        fill
        objectFit="cover"
        className="rounded-[20px]"
      />
    </div>
  )
}

export default ImageComponent
