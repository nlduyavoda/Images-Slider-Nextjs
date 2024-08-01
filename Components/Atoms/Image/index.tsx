import Image, { ImageProps } from "next/image"
import { Photo } from "../../../pages/collection/utils"
import classNames from "classnames"
import { useEffect, useRef } from "react"

export type ImageComponentProps = {
  photo: Photo
  active: boolean
}

const ImageComponent = ({
  photo,
  active,
  ...props
}: Partial<ImageProps> & ImageComponentProps) => {
  const ref = useRef(null)
  // if (active) {
  //   console.log({
  //     ...photo,
  //     active,
  //   })
  // }

  const imageClass = classNames(
   'transition-all duration-300 left-[0px] top-[0px]',
   {
    'origin-right h-[70vh] w-[70vw] z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2': active,
    'absolute h-[35vh] w-[35vw]': !active,
   }
  );
  useEffect(() => { 
    if (ref.current && active) {
      const timer = setTimeout(() => {
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'start',
        })
      }, 300)
      return () => clearTimeout(timer)
    }
  },[active])
  return (
    <div
      className={imageClass}
    >
      <Image
        ref={ref}
        src={photo.src.original}
        alt={photo.photographer}
        fill
        sizes="(max-width: 768px) 100vw"
        priority={false}
        className="rounded-[20px] absolute"
      />
    </div>
  )
}

export default ImageComponent
