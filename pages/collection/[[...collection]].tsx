import { ReactElement, useState } from 'react'
import {
  ImageContainer,
  ImageContainerProps,
} from '../../Components/molecules/Image'
import { useCollectionQuery } from '../../Services/usePhotoQueries'
import ShopLayout from './Layout'
import styled from 'styled-components'

const Collection = () => {
  const { collectionQuery } = useCollectionQuery()
  const { data: dataSource, isLoading } = collectionQuery()
  const [selecetedID, setSelectedID] = useState(null)
  const handleSelect = (id, event) => {
    if (selecetedID) {
      return setSelectedID('')
    }
    setSelectedID(id)
  }
  if (isLoading && !dataSource) return <>Loading...</>
  return (
    <Container>
      {dataSource.photos.map((item, index) => {
        const imageContainerProps: ImageContainerProps = {
          onClick: (event) => handleSelect(item.id, event),
          alt: item.alt,
          src: item.src.original,
          id: item.id,
        }
        return <ImageContainer {...imageContainerProps} />
      })}
    </Container>
  )
}

export const Container = styled.div`
  column-count: 3;
  column-gap: 20px 20px;
`

Collection.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <>{page}</>
    </ShopLayout>
  )
}

export default Collection
