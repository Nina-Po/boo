import styled, { ThemeProvider } from "styled-components";
import React from "react";
import { useSelector } from "react-redux";

const Button = ({ text, onClick }) => {
  const { theme } = useSelector((store) => store.user);

  return (
    <ThemeProvider theme={theme ? DarkTheme : BaseTheme}>
      <Wrapper>
        <button onClick={onClick}>{text}</button>
      </Wrapper>
    </ThemeProvider>
  );
};

const BaseTheme = {
  background: "var(--clr-green-dark)",
};

const DarkTheme = {
  background: "var(--dark-button-red)",
};

const Wrapper = styled.div`
  button {
    width: max-content;
    z-index: 1;
    position: relative;
    font-size: inherit;
    font-family: inherit;
    color: white;
    padding: 0.4rem 0.8rem;
    outline: none;
    border: none;
    background: blue;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }

    &::before {
      content: "";
      z-index: -1;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: blue;
      transform-origin: center;
      transform: scale(1);
      border-radius: 8px;
    }

    &:hover::before {
      transition: all 0.75s ease-in-out;
      transform-origin: center;
      transform: scale(1.75);
      opacity: 0;
      border-radius: 8px;
    }
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
    .button {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Button;
