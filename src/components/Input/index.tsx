import { TextInputProps, TextInput } from 'react-native'
import { Container } from './styles'
import { useTheme } from 'styled-components/native'
import { RefObject } from 'react'

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const { COLORS } = useTheme()
  return (
    <Container
      ref={inputRef}
      placeholderTextColor={COLORS['gray-300']}
      {...rest}
    />
  )
}
