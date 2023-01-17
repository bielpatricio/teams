import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type ButtonTypeStyleProps = 'primary' | 'secondary'

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  min-width: 56px;
  min-height: 56px;

  background-color: ${({ theme, type }) =>
    type === 'primary' ? theme.COLORS['blue-700'] : theme.COLORS['red-700']};

  border-radius: 6px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-100']};
  `}
`
