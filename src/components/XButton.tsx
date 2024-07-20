import { ButtonHTMLAttributes } from "react";
import { XMarkIcon } from "./Icons";
import styled from "styled-components";

interface XButtonProps {
  size?: number;
}

const XButton = ({ size, ...props }: ButtonHTMLAttributes<Element> & XButtonProps) => {
  return (
    <Button size={size} {...props}>
      <XMarkIcon color="rgba(0, 0, 0, 0.4)" />
    </Button>
  );
};
export default XButton;

const Button = styled.button<XButtonProps>`
  width: ${(props) => props.size ?? "30px"};
  height: ${(props) => props.size ?? "30px"};
  border-radius: 100%;
  background-color: rgba(255, 255, 255, 0.2);
`;
