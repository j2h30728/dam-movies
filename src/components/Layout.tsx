import { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import Header from "./Header";
import ScrollTopButton from "./ScrollTopButton";
import { darkTheme, whiteTheme } from "../styles/theme";
import useDarkMode from "../hooks/useDarkMode";
import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }: { children: ReactNode }) => {
  const { isCurrentDarkMode } = useDarkMode();
  return (
    <ThemeProvider theme={isCurrentDarkMode ? darkTheme : whiteTheme}>
      <GlobalStyle />
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
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export default Layout;
