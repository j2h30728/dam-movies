import { Link, useLocation } from "react-router-dom";
import { navigates } from "../constants/movie";
import styled from "styled-components";
import DarkModeButton from "./DarkModeButton";
import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const { pathname } = useLocation();
  const { isCurrentDarkMode, handleToggleDarkMode } = useDarkMode();

  return (
    <HeaderContainer>
      <h1 id="title">담</h1>
      <NavigatorContainer>
        {navigates.map((navigate) => (
          <Navigator
            preventScrollReset={true}
            key={navigate.text}
            to={navigate.href}
            $isCurrentPath={pathname === navigate.href}>
            {navigate.text}
          </Navigator>
        ))}
      </NavigatorContainer>
      <DarkModeButton id="dark-mode" isDarkMode={isCurrentDarkMode} onClick={handleToggleDarkMode} />
    </HeaderContainer>
  );
};
export default Header;

const HeaderContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 70px;
  background-color: ${({ theme }) => theme.color.background};

  #title {
    font-size: 20px;
    font-weight: 700;
  }
  #dark-mode {
    position: absolute;
    right: 3%;
  }
`;

const NavigatorContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Navigator = styled(Link)<{ $isCurrentPath: boolean }>`
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme, $isCurrentPath }) => ($isCurrentPath ? theme.color.primary : theme.color.text)};
  &:hover {
    color: ${({ theme }) => theme.color.neutral};
  }
  &:active {
    color: ${({ theme }) => theme.color.point};
  }
`;
