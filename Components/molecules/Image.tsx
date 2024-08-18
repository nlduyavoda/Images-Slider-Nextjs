import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

export type ImageContainerProps = {
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void
  alt: string
  src: string
  dynamicwidth?: number
  dynamicHeight?: number
  id: any
} & {
  ref?: any
}

export type ImageComponentProps = ImageContainerProps

export const ImageComponent = (props) => {
  return <ImageStyle ref={props.ref} {...props} />
}

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <Figure>
      <ImageComponent ref={props.ref} {...props} />
    </Figure>
  )
}

export const Figure = styled.figure`
  margin: 0;
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
  height: fit-content;
  figure > img {
    grid-row: 1 / -1;
    grid-column: 1;
  }
`

export const ImageStyle = styled(Image)`
  display: block;
  border-radius: 10px;
`
