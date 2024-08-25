import { Loading } from '@Atom/Loading'
import { Dimmer } from 'semantic-ui-react'

export const DimmerLoader = (props: any) => {
  const { active = false } = props
  return (
    <Dimmer active={active}>
      <Loading>Loading</Loading>
    </Dimmer>
  )
}
