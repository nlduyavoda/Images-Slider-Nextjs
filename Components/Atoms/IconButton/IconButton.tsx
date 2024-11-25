import {
  IconButtonProps as MuiIconButtonProps,
  IconButton as IconWrapper,
  IconButtonProps,
  SxProps,
} from '@mui/material'
import React from 'react'

import { Children } from 'react'

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return (
    <IconWrapper aria-label="delete" {...props}>
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const customSxP: SxProps = {
            ...props.sx,
            // color: 'var(--gray-200)',
          }
          return React.cloneElement(child, {
            sx: customSxP,
            ...props,
          })
        }
        return child
      })}
    </IconWrapper>
  )
}
