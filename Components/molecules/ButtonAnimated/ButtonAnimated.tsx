import { ButtonContent, Button, Icon } from 'semantic-ui-react'

export const ButtonAnimated = (props) => {
  return (
    <Button animated="vertical" className="max-h-10 text-black">
      <ButtonContent hidden>{props.name}</ButtonContent>
      <ButtonContent visible>
        <Icon name="shop" />
      </ButtonContent>
    </Button>
  )
}
