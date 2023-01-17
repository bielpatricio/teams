import { ButtonIconTypeStyleProps, Container, Icon } from './styles'
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps
  icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ type = 'primary', icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  )
}
