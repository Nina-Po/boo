import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, registerUser } from "../features/user/userSlise";
import toast from "react-hot-toast";
import Input from "../components-special/Input";
import InputPass from "../components-special/InputPass";
import Button from "../components-special/Button";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  station: "",
};

const Register = () => {
  const { user, isLoading, apartments } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
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

  const toggleMemberHandler = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  // useEffect(() => {
  //   if (user) {
  //     setTimeout(() => {
  //       navigate("/");
  //     }, 2000);
  //   }
  // }, [user]);

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <div className="header">
          <p>можно добавить текст или логотип</p>
        </div>
        <h3 style={{ textAlign: "center" }}>
          {values.isMember ? "Авторизация" : "Регистрация"}
        </h3>
        <div className="input-content">
          {!values.isMember && (
            <Input
              placeholder="Name"
              type="text"
              name="name"
              value={values.name}
              onChange={changeHandler}
            />
          )}
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={values.email.toLowerCase()}
            onChange={changeHandler}
          />
          <InputPass
            placeholder="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
        </div>
        <div className="actions">
          <Button
            type="submit"
            className="btn button-form"
            disabled={isLoading}
            text={isLoading ? "Думаю ..." : "Подтвердить"}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <p>
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
      </form>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .form {
    width: 90vw;
    max-width: var(--fixed-width);
    /* background-color: var(--clr-primary-8); */
    /* box-shadow: var(--shadow-2); */
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    /* border-radius: 40px; */
  }
  input {
    margin: 0.5rem 0;
  }
  .header {
    text-align: center;
    margin: 1rem;
  }
  .input-content {
    text-align: center;
  }

  button {
    font-size: 1.3rem;
  }
  .actions {
    margin: 1rem;
    text-align: center;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-2);
    cursor: pointer;
    font-size: 1rem;
    transition: var(--transition);
    :hover {
      color: var(--clr-primary-4);
    }
  }
  .getapartments {
    margin: 1rem;
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    input {
      width: 300px;
    }
  }
  .st {
    display: flex;
    flex-wrap: wrap;
    p {
      margin: 1rem;
    }
  }
  @media (min-width: 992px) {
  }
`;
export default Register;
