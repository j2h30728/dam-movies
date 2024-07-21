import { ButtonHTMLAttributes } from "react";
import { XMarkIcon } from "./Icons";
import styled from "styled-components";

interface XButtonProps {
  size?: number;
}

const XButton = ({ size, ...props }: ButtonHTMLAttributes<Element> & XButtonProps) => {
  return (
    <Button size={size} {...props}>
      <XMarkIcon />
    </Button>
  );
};
export default XButton;

const Button = styled.button<XButtonProps>`
  width: ${(props) => props.size ?? "35px"};
  height: ${(props) => props.size ?? "35px"};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.color.background};
  opacity: 50%;

  svg {
    color: ${({ theme }) => theme.color.text};
    opacity: 50%;
  }
`;
