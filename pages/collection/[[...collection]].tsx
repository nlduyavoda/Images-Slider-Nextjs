import { ReactElement } from 'react'
import ShopLayout from './Layout'
import styled from 'styled-components'
import { DimmerLoader } from '@Molecules/DimmerLoader'
import { Images } from '@Organisms/Images'
import { fetcher } from '@Apis'

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
  return isLoading ? (
    <DimmerLoader active={true} />
  ) : (
    <Images photos={dataSource.photos} />
  )
}

export default Collection

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
