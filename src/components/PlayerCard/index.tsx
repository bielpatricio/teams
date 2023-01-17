import { Container, Icon, Name } from './styles'
import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { ButtonIcon } from '@components/ButtonIcon'

type Props = {
  name: string
  onRemove: () => void
}

export function PlayerCard({ name, onRemove }: Props) {
  return (
    <Container>
      <Icon name="person" />
      <Name>{name}</Name>
      <ButtonIcon onPress={onRemove} type="secondary" icon="close" />
    </Container>
  )
}
