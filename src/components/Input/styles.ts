import styled, { css } from 'styled-components/native'
import { TextInput } from 'react-native'

export const Container = styled(TextInput)`
  flex: 1;
  min-width: 56px;
  max-height: 56px;

  border-radius: 6px;

  padding: 16px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS['gray-700']};
    color: ${theme.COLORS.white};
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.regular};
  `}
`
