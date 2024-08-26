import { ImageProps } from 'next/image'
import { forwardRef, HtmlHTMLAttributes, ReactNode } from 'react'
import { Image } from 'semantic-ui-react'
import styled, { css } from 'styled-components'

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
    return <ImageStyle rounded ref={ref} {...props} />
  },
)

export const ImageContainer = (props: ImageContainerProps) => {
  return (
    <Figure active={props.active} className="relative">
      <Backdrop active={props.active} />
      <Badge variants={BadgesType.danger} active={props.active}>
        {BadgesLabel.Save}
      </Badge>
      <Badge variants={BadgesType.primary} active={props.active}>
        {BadgesLabel.Link}
      </Badge>
      <Badge variants={BadgesType.default} active={props.active}>
        {BadgesLabel.Options}
      </Badge>
      <ImageComponent {...props} />
    </Figure>
  )
}
export enum BadgesType {
  danger = 'danger',
  primary = 'primary',
  default = 'default',
}
export enum BadgesLabel {
  Save = 'Save',
  Link = 'Link',
  Options = 'Options',
}
export const BadgeColors = {
  [BadgesType.danger]: css`
    background-color: red;
  `,
  [BadgesType.primary]: css`
    bottom: 0;
    left: 50%;
  `,
  [BadgesType.default]: css`
    bottom: 0;
    right: 0;
  `,
}

const visible = css`
  opacity: 1;
`

type BadgeProps = {
  variants: BadgesType
  active: boolean
  children: ReactNode
}

export const badgeAnimation = {
  [BadgesType.danger]: {
    active: css`
      left: 20px;
    `,
    inactive: css`
      left: -20px;
    `,
  },
  [BadgesType.primary]: {
    active: css`
      right: 20px;
    `,
    inactive: css`
      right: -20px;
    `,
  },
  [BadgesType.default]: {
    active: css`
      right: 20px;
    `,
    inactive: css`
      right: -20px;
    `,
  },
}

export const Badge: (props: BadgeProps) => ReactNode = styled.div`
  background-color: 'red';
  color: white;
  height: 40px;
  width: 70px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  position: absolute;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: 0.4s all;
  ${(props: BadgeProps) => {
    const tagStyle = BadgeColors[props.variants]
    const activeStyle = props.active
      ? badgeAnimation[props.variants].active
      : badgeAnimation[props.variants].inactive

    return css`
      ${tagStyle};
      ${activeStyle}
    `
  }};
`

export const Backdrop: (props: any) => ReactNode = styled.div`
  transition: 0.4s all;
  ${(props) =>
    props.active
      ? css`
          position: absolute;
          height: 100%;
          width: 100%;
          background: transparent;
          z-index: 10;
          background-color: black;
          opacity: 0.6;
        `
      : ''}
`

export const Figure: any = styled.figure`
  margin: 0;
  display: inline-block;
  margin-bottom: 10px;
  width: 100%;
  height: fit-content;
  img {
    grid-row: 1 / -1;
    grid-column: 1;
    transition: 0.1s all;
    ${(props: any) => {
      console.log(props.active)
      const activeStyle = css`
        filter: grayscale(1);
      `
      return props.active ? activeStyle : ''
    }}
  }
` as { active: boolean } & HtmlHTMLAttributes<HTMLDivElement>

export const ImageStyle = styled(Image)`
  display: block;
`
