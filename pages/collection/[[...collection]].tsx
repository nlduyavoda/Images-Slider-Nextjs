import { ReactElement, useEffect, useRef, useState } from 'react'
import {
  ImageContainer,
  ImageContainerProps,
} from '../../Components/molecules/Image'
import { useCollectionQuery } from '../../Services/usePhotoQueries'
import ShopLayout from './Layout'
import { onHandle, Photo } from './utils'
import SubItem, { SubItemProps } from '../../Components/molecules/ImageRows'
import styled from 'styled-components'

const Collection = () => {
  const ref = useRef(null)
  const { collectionQuery } = useCollectionQuery()
  const { data: dataSource, isLoading } = collectionQuery()
  const [selecetedID, setSelectedID] = useState(null)
  const [TotalHeight, setTotalHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const [windowInset, setWindowInset] = useState<any>({
    width: null,
    height: null,
  })
  const handleSelect = (id, event) => {
    if (selecetedID) {
      return setSelectedID('')
    }
    setSelectedID(id)
  }

  useEffect(() => {
    const window = document.body.getBoundingClientRect()
    setWindowWidth(window.width)
    setWindowInset({
      width: window.width,
      height: window.height,
    })
  }, [])

  if (isLoading && !dataSource) return <>Loading...</>
  const cards: Photo[] = dataSource.photos
  let row = 0
  let hash = []
  const response = onHandle({
    data: dataSource.photos,
    windowWidth,
  })
  return (
    <Container>
      {dataSource.photos.map((item, index) => {
        const imageContainerProps: ImageContainerProps = {
          onClick: (event) => handleSelect(item.id, event),
          alt: item.alt,
          src: item.src.medium,
          id: item.id,
        }
        return <ImageContainer {...imageContainerProps} />
      })}
    </Container>
  )
}

export const Container = styled.div`
  column-count: 6;
  column-gap: 10px;
  padding: 10px;
  transition: all 0.5s;
`

Collection.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <>{page}</>
    </ShopLayout>
  )
}

export default Collection
