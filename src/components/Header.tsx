import { Link, useLocation } from "react-router-dom";
import { navigates } from "../constants/movie";
import styled from "styled-components";

const Header = () => {
  const { pathname } = useLocation();

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
  background-color: #ffffff;
  border-bottom: 1px solid gray;

  #title {
    font-size: 20px;
    font-weight: 700;
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
  color: ${(prop) => (prop.$isCurrentPath ? "red" : "black")};
  &:hover {
    color: gray;
  }
  &:active {
    color: skyblue;
  }
`;
