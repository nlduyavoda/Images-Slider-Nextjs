import Image, { ImageProps } from "next/image"
import { Photo } from '../../../app/collection/utils'
import classNames from "classnames"
import { forwardRef, useEffect, useRef } from 'react'

export type ImageComponentProps = {
  photo: Photo
  active: boolean
}

const ImageComponent = forwardRef<HTMLDivElement, ImageComponentProps>(
  (props, ref) => {
    const { photo, active } = props
    const { src, alt } = photo
    const className = classNames('w-full h-full object-cover', {
      'opacity-50': active,
    })
    return (
      <div ref={ref}>
        <Image
          src={photo.src.large}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className={className}
          {...props}
        />
      </div>
    )
  },
)

export default ImageComponent
