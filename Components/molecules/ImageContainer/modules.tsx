import { HtmlHTMLAttributes, ReactNode } from 'react'
import styled, { css } from 'styled-components'

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

export const Badge: (
  props: BadgeProps & HtmlHTMLAttributes<HTMLDivElement>,
) => ReactNode = styled.div`
  color: white;

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
      margin-top: 10px;
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
      const activeStyle = css`
        filter: grayscale(1);
      `
      return props.active ? activeStyle : ''
    }}
  }
` as { active: boolean } & HtmlHTMLAttributes<HTMLDivElement>