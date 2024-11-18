import {
  ImageContainer,
  ImageContainerProps,
} from '@Molecules/ImageContainer/Image'
import { ContainerStyle } from './styled'
import { ImagesType } from './type'
import { useState } from 'react'
import { useDebounce } from '@uidotdev/usehooks'
import { ActiveLink } from '@Atom/ActiveLink'

export const Images = (props: ImagesType) => {
  const { photos } = props
  const [selectedID, setSelectedID] = useState<number | null>(null)
  const debouncedSelectedID = useDebounce(selectedID, 300)

  const handleSelect = (event: any) => {
    setSelectedID(event.target.id)
  }

  return (
    <ContainerStyle>
      {photos.map((item) => {
        const imageStyle = {
          borderRadius: 16,
          display: 'block',
          width: '100%',
        }
        const imageContainerProps: ImageContainerProps = {
          src: item.src.original,
          alt: item.alt,
          id: item.id + '',
          active: item.id.toString() === debouncedSelectedID?.toString(),
          onMouseEnter: handleSelect,
          style: imageStyle,
        }
        const link = `/collection/${item.id}`
        return (
          <ActiveLink href={link}>
            <ImageContainer key={item.id} {...imageContainerProps} />
          </ActiveLink>
        )
      })}
    </ContainerStyle>
  )
}
