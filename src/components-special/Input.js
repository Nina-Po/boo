import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, value, name, onChange, autoComplete }) => {
  return (
    <Wrapper>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete={autoComplete}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;

  input {
    box-sizing: border-box;
    padding: 1rem;
    border: none;
    background: var(--gray-background);
    height: 60px;
    width: calc(100%);
    font-size: 100%;
    border-radius: 15px;
    border: 1px solid var(--gray-border);
    color: var(--gray-dark);

    ::placeholder {
      color: var(--gray-dark);
      transition: 0.6s;
    }
    :focus-visible {
      outline: none;
    }
  }

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1140px) {
  }
  @media (min-width: 1340px) {
  }
`;
export default Input;
