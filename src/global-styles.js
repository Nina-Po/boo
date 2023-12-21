import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";

const BaseTheme = {
  color: "var(--clr-grey-9)",
};

const DarkTheme = {
  color: "var(--dark-bg-primary)",
};
const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Sofia Sans Semi Condensed', sans-serif;
    /* font-weight: 400; */
    height: 100%;

  }


`;

const GlobalStyles = () => {
  const { theme } = useSelector((store) => store.user);

  return (
    <ThemeProvider theme={theme ? DarkTheme : BaseTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default GlobalStyles;
