import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'

export type FilterTypeStyleProps = { isActive?: boolean }

export const Container = styled(TouchableOpacity)<FilterTypeStyleProps>`
  width: 70px;
  height: 38px;

  ${({ theme, isActive }) =>
    isActive &&
    css`
      background: ${theme.COLORS['blue-700']};
    `}

  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`

export const Title = styled.Text`
  text-transform: uppercase;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-100']};
  `}
`
