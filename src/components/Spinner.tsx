import { CSSProperties, PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";

interface SpinnerProps {
  size?: number;
  style?: CSSProperties;
}

const Spinner = ({ size = 50, style }: PropsWithChildren<SpinnerProps>) => {
  return (
    <SpinnerContainer style={style}>
      <Dot size={size} />
    </SpinnerContainer>
  );
};

export default Spinner;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
`;

const Dot = styled.div<SpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => (size ?? 50) / 10}px solid ${({ theme }) => theme.color.primary};
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${spinAnimation} 1s infinite linear;
`;
