import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { ChevronUpIcon } from "./Icons";
import scrollTolTop from "../utils/scrollTolTop";

const ScrollTopButton = ({ ...props }: ButtonHTMLAttributes<Element>) => {
  return (
    <Button {...props} onClick={scrollTolTop}>
      <ChevronUpIcon width={30} height={30} />
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button`
  position: fixed;
  right: 30px;
  bottom: 3%;
  background-color: ${({ theme }) => theme.color.text};
  padding: 8px 10px;
  border-radius: 100%;
  border: 1 solid ${({ theme }) => theme.color.secondary};

  svg {
    color: ${({ theme }) => theme.color.point};
  }
`;
