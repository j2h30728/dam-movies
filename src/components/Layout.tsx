import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import ScrollTopButton from "./ScrollTopButton";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={{}}>
      <Container>
        <Header />
        <Wrapper>
          {children}
          <ScrollTopButton />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
};
const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Layout;
