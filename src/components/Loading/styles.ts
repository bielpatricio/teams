import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS['gray-900']};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS['blue-700'],
}))``
