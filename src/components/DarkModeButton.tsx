import { ButtonHTMLAttributes } from "react";
import { MoonIcon, SunIcon } from "./Icons";
import styled from "styled-components";

interface DarkModeButtonProps {
  size?: number;
}

const DarkModeButton = ({
  isDarkMode,
  size,
  ...props
}: ButtonHTMLAttributes<Element> & { isDarkMode: boolean } & DarkModeButtonProps) => {
  return (
    <Button size={size} {...props}>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
export default DarkModeButton;

const Button = styled.button<DarkModeButtonProps>`
  width: ${(props) => props.size ?? "30px"};
  height: ${(props) => props.size ?? "30px"};
  svg {
    color: ${({ theme }) => theme.color.point};
  }
`;
