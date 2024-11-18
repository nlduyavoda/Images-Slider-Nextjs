import { ImageProps } from 'next/image'
import { forwardRef, useEffect, useState } from 'react'
import { Backdrop, Badge, BadgesLabel, BadgesType, Figure } from './modules'
import CircularIndeterminate from '@Atom/Progress/CircularIndeterminate'

export type ImageComponentProps = {
  dynamicwidth?: number
  dynamicHeight?: number
  active?: boolean
} & ImageProps

export type ImageContainerProps = ImageComponentProps & {
  ref?: any
}

export const ImageComponent = forwardRef<any>((props, ref = null) => {
  return <img ref={ref} {...props} />
})

export const ImageContainer = (props: ImageContainerProps) => {
  const [hydration, setHydration] = useState(false)
  const touched = props.active
  // const touched = true
  useEffect(() => {
    setHydration(true)
  }, [])
  if (!hydration) return <CircularIndeterminate />

  return (
    <Figure active={touched} className="relative">
      {/* <Backdrop active={touched} /> */}
      {/* <Badge className="p-4" variants={BadgesType.danger} active={touched}>
        {BadgesLabel.Save}
      </Badge>
      <Badge className="mb-4" variants={BadgesType.default} active={touched}>
        <Icon
          circular
          className="bg-black text-white"
          name="ellipsis horizontal"
        />
      </Badge> */}
      {/* <Badge className="mb-4" variants={BadgesType.primary} active={touched}>
        <Icon className="bg-black text-white" circular name="share" />
      </Badge> */}
      <ImageComponent {...props} />
    </Figure>
  )
}
