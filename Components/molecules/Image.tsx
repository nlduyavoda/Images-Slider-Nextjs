import { ImageProps } from 'next/image'
import { forwardRef, HtmlHTMLAttributes } from 'react'
import { Image } from 'semantic-ui-react'
import styled from 'styled-components'

export type ImageComponentProps = {
  dynamicwidth?: number
  dynamicHeight?: number
  active?: boolean
} & ImageProps

export type ImageContainerProps = ImageComponentProps & {
  ref?: any
}

export const ImageComponent = forwardRef<any, ImageComponentProps>(
  (props, ref = null) => {
    return <ImageStyle ref={ref} {...props} />
  },
)

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <Figure>
      <ImageComponent {...props} />
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
