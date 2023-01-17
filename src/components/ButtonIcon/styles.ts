import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export type ButtonIconTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 56px;

  border-radius: 6px;
  margin-left: 12px;
  justify-content: center;
  align-items: center;
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color:
    type === 'primary' ? theme.COLORS['blue-500'] : theme.COLORS['red-500'],
}))``
