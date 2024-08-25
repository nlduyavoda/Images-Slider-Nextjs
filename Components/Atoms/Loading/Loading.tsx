import { Loader } from 'semantic-ui-react'

export const Loading = (props) => {
  const { children = <>loading</> } = props
  return <Loader>{children}</Loader>
}
