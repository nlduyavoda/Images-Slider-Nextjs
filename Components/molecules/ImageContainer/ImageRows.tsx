import { Photo } from 'pexels'
import { useEffect, useRef, useState } from 'react'
import { ImageContainer, ImageContainerProps } from './Image'

export type SubItemProps = {
  item: { el: Photo }
  itemIndex: number
  handleSelect: (id: number, event: any) => void
  rowIndex: number
  prev?: Photo
  imageSizes: {
    height: number
    width: number
  }
} & any
const SubItem = ({
  item,
  itemIndex,
  handleSelect,
  rowIndex,
  prev,
  ...props
}: SubItemProps) => {
  const ref = useRef<any>(null)
  const [imageSizes, setImageSizes] = useState({ width: 0, height: 0 })
  const [dynamicHeight, setDynamicHeight] = useState(0)
  const [prevElHeight, setPrevElHeight] = useState(null)
  const dynamicwidth = 236 * itemIndex + 8 * itemIndex
  const subHash = []
  subHash.push(item.el.id)
  const handleClick = (event) => handleSelect(item.el.id, event)

  const imageContainerProps: ImageContainerProps = {
    onClick: handleClick,
    alt: item.el.alt,
    src: item.el.src.medium,
    dynamicwidth,
    dynamicHeight,
    id: item.el.id,
  }

  useEffect(() => {
    const imageUrl = item.el.src.medium
    let result = {
      width: 0,
      height: 0,
    }
    const img = new Image()
    img.src = imageUrl

    img.onload = () => {
      setImageSizes({
        width: img.width,
        height: img.height,
      })
    }

    img.onerror = () => {
      console.error('Failed to load image')
      setImageSizes(result)
    }
  }, [])

  useEffect(() => {
    if (!!prev) {
      const prevEl = document.getElementById(prev.id + '')
      setPrevElHeight(prev.id)
      const { height, y, top, bottom } = prevEl.getBoundingClientRect()
      if (itemIndex === 0) {
        // console.log({
        //   props: prevEl.getBoundingClientRect(),
        //   prevEl,
        //   windowInset: props.windowInset,
        // })
      }
      const getPrevElHeight = height + 8 + y
      setDynamicHeight(getPrevElHeight)
    }
  }, [imageSizes])



  return (
    <ImageContainer
      key={imageContainerProps.id}
      ref={ref}
      id={imageContainerProps.id}
      {...imageContainerProps}
    />
  )
}

export default SubItem
