import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS['gray-900']};
  padding: 24px;
`

export const Form = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS['gray-700']};

  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
`

export const HeaderList = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;
`

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.sm}px;
    font-family: ${theme.FONT_FAMILY.bold};
    color: ${theme.COLORS['gray-200']};
  `}
`
