import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  registerHandler,
  loginUser,
  registerUser,
} from "../../features/user/userSlise";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import Input from "../../components-special/Input";
import InputPass from "../../components-special/InputPass";
import Button from "../../components-special/Button";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  remind: "",
};
const RegisterModal = () => {
  const { user, isLoading, isRegisterModal } = useSelector(
    (store) => store.user
  );
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialState);

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Введите все значения");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <Wrapper>
      <div className="modal">
        <div className="close" onClick={() => dispatch(registerHandler(false))}>
          <AiOutlineClose />
        </div>
        <form className="content" onSubmit={onSubmit}>
          <h2>{values.isMember ? "Авторизация" : "Регистрация"}</h2>
          <div className="input-content">
            {!values.isMember && (
              <div className="in">
                <Input
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={changeHandler}
                />
              </div>
            )}
            <div className="in">
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={values.email.toLowerCase()}
                onChange={changeHandler}
              />
            </div>
            <div className="in">
              <InputPass
                placeholder="Password"
                type="password"
                name="password"
                value={values.password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="actions">
            <Button
              type="submit"
              disabled={isLoading}
              text={isLoading ? "Думаю ..." : "Подтвердить"}
            />
          </div>
        </form>
        <div className="variant">
          <p className="asq">
            {values.isMember ? "Нет регистрации? " : "Уже есть регистрация? "}
            <button
              type="button"
              onClick={toggleMemberHandler}
              className="member-btn"
            >
              {values.isMember ? " Регистрация" : "Авторизация"}
            </button>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  font-family: "Neucha", cursive;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 20, 20, 0.5);
  transition: 1s;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  z-index: 999;
  opacity: 1;
  .modal {
    width: 95vw;
    height: 95vh;
    background-color: white;
    border-radius: 25px;
  }
  .close {
    display: flex;
    justify-content: end;
    margin: 1rem;
    margin-bottom: 0;
    cursor: pointer;
    svg {
      font-size: 2.5rem;
      transition: 0.7s;
    }
    :hover {
      svg {
        color: var(--blue-1);
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 3rem;
  }
  .in {
    margin: 1rem;
    width: 300px;
  }
  .variant {
    margin: 1rem;
    display: flex;
    justify-content: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: #19365d;
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition2);
    :hover {
      text-decoration: underline;
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .modal {
      width: 600px;
      height: 450px;
    }
    .in {
      margin: 1rem;
      width: 400px;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default RegisterModal;
