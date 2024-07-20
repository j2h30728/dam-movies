import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

import { ChevronUpIcon } from "./Icons";
import scrollTolTop from "../utils/scrollTolTop";

const ScrollTopButton = ({ ...props }: ButtonHTMLAttributes<Element>) => {
  return (
    <Button {...props} onClick={scrollTolTop}>
      <ChevronUpIcon color="white" width={30} height={30} />
    </Button>
  );
};

export default ScrollTopButton;

const Button = styled.button`
  position: fixed;
  right: 30px;
  bottom: 3%;
  background-color: gray;
  padding: 8px 10px;
  border-radius: 100%;
`;
