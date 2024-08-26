import {
  ImageContainer,
  ImageContainerProps,
} from '@Molecules/ImageContainer/Image'
import { ButtonProps } from 'semantic-ui-react'
import { ContainerStyle } from './styled'
import { ImagesType } from './type'
import { useState } from 'react'

export const Images = (props: ImagesType & ButtonProps) => {
  const { photos, onSelect, ...rest } = props
  const [selectedID, setSelectedID] = useState<number | null>(null)
  console.log('selectedID: ', selectedID)
  const handleSelect = (event: any) => {
    setTimeout(() => {
      setSelectedID(event.target.id)
    }, 100)
  }
  return (
    <ContainerStyle>
      {photos.map((item) => {
        const imageContainerProps: ImageContainerProps = {
          src: item.src.original,
          alt: item.alt,
          id: item.id + '',
          active: item.id.toString() === selectedID?.toString(),
          onMouseEnter: handleSelect,
        }
        return <ImageContainer key={item.id} {...imageContainerProps} />
      })}
    </ContainerStyle>
  )
}
