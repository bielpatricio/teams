import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS['gray-500']};
  border-radius: 6px;
  flex-direction: row;

  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.regular};
  color: ${({ theme }) => theme.COLORS['gray-200']};
`

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS['blue-500'],
  weight: 'fill',
}))`
  margin-right: 20px;
`
