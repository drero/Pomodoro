import { ButtonContainer, ButtonVariant, ButtonTextColor } from "./Button.styles";

interface ButtonProps {
  variant?: ButtonVariant;
  textColor?: ButtonTextColor;
}

export function Button({ variant = 'primary', textColor = 'white' }: ButtonProps) {
  return <ButtonContainer variant={variant} textColor={textColor}>Enviar</ButtonContainer>
}