require('dotenv').config()
import { ReactElement, useState } from 'react'
import {
  ImageContainer,
  ImageContainerProps,
} from '@Components/molecules/Image'
import ShopLayout from './Layout'
import styled from 'styled-components'

const fetcher = async (props: { query?: string; perPage?: string }) => {
  const { query, perPage } = props
  const response = await fetch(
    `${process.env.HOST}/search?query=${query}&per_page=${perPage}`,
    {
      headers: {
        Authorization: process.env.API_KEY,
      },
    },
  ).then((res) => res.json())
  return response
}

export async function getServerSideProps() {
  const repoInfo = await fetcher({
    query: 'City',
    perPage: '20',
  })
  return {
    props: {
      data: repoInfo || [],
    },
  }
}

const Collection = ({ data: dataSource, isLoading = false }) => {
  console.log('dataSource: ', dataSource)
  const [selectedID, setSelectedID] = useState(null)
  if (isLoading && !dataSource) return <>Loading...</>
  return (
    <Container>
      {dataSource.photos.map((item) => {
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

        return <ImageContainer key={item.id} {...imageContainerProps} />
      })}
    </Container>
  )
}

export const Container = styled.div`
  column-count: 5;
  column-gap: 20px 20px;
  @media (max-width: 1024px) {
    column-count: 3;
  }
  @media (max-width: 768px) {
    column-count: 2;
  }
  @media (max-width: 480px) {
    column-count: 1;
  }
`

Collection.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <>{page}</>
    </ShopLayout>
  )
}

export default Collection
