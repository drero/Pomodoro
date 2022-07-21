import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
export type ButtonTextColor = 'white' | 'black' | 'grey';

interface ButtonContainerProps {
  variant: ButtonVariant;
  textColor: ButtonTextColor;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

const ButtonTextColor = {
  white: '#fff',
  black: '#000',
  grey: '#ccc'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0px;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.tertiary};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]};
      color: ${ButtonTextColor[props.textColor]};
    `
  }}*/
`