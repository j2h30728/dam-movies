import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
* {
  box-sizing: border-box;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera */
    }
    font-family: 'Pretendard-Regular', sans-serif;
  }
button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  a {
  text-decoration: none;
  color: inherit;
}
body {
  height: 100vh;
  line-height: 1;
  font-weight: 400;
  margin: 0 auto;
  color :  ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
}
`;

export default GlobalStyle;
