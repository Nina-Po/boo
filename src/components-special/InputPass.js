import React, { useState } from "react";
import styled from "styled-components";
import { BsEyeSlash, BsEye } from "react-icons/bs";

const InputPass = ({ type, placeholder, value, name, onChange }) => {
  const [showPass, setShowPass] = useState(false);

  const showPassHandler = () => {
    setShowPass(!showPass);
  };

  return (
    <Wrapper>
      <input
        type={showPass ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
      />

      <div className="icon" onClick={showPassHandler}>
        {showPass ? <BsEye /> : <BsEyeSlash />}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /* margin: auto; */
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
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
      color: var(--blue-1);
    }
    :focus-visible {
      outline: none;
    }
    :hover {
      ::placeholder {
        transition: var(--transition);
      }
    }
  }
  .icon {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--gray-1);
    position: absolute;
    right: 5px;

    svg {
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--blue-05);
      transition: var(--transition2);
      :hover {
        color: var(--blue-0);
      }
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
export default InputPass;
