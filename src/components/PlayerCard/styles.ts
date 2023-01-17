import styled, { css } from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS['gray-600']};
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  border-radius: 6px;
`

export const Name = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.md}px;
    font-family: ${theme.FONT_FAMILY.regular};
    color: ${theme.COLORS['gray-200']};
  `}
`

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS['gray-200'],
}))`
  margin-left: 16px;
  margin-right: 4px;
`
