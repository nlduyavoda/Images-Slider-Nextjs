import {
  ImageContainer,
  ImageContainerProps,
} from '@Molecules/ImageContainer/Image'
import { Photo } from 'pexels'
import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'

type Images = {
  photos: Photo[]
}

export const ContainerStyle = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 'masonry';
`
export const Images = (props: Images) => {
  const [selectedID, setSelectedID] = useState(null)
  const { photos } = props
  return (
    <ContainerStyle>
      {photos.map((item) => {
        const handleHover = (event) => {
          setTimeout(() => {
            setSelectedID(event.target.id)
          }, 1000)
        }
        const imageContainerProps: ImageContainerProps = {
          alt: item.alt,
          src: item.src.original,
          id: item.id + '',
          onMouseEnter: handleHover,
          active: selectedID === item.id,
        }
        console.log({ imageContainerProps })
        return <ImageContainer key={item.id} {...imageContainerProps} />
      })}
    </ContainerStyle>
  )
}
