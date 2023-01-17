import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.xl}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.bold};
  color: ${({ theme }) => theme.COLORS.white};
`

export const Subtitle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
  color: ${({ theme }) => theme.COLORS['gray-300']};
  margin-top: 10px;
`
