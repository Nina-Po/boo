import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { logOutUser, registerHandler } from "../../features/user/userSlise";
import styled, { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarCloseHandler } from "../../features/user/userSlise";

import Button from "../../components-special/Button";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(logOutUser());
    // dispatch(sidebarCloseHandler());
  };

  const openRegisterHandler = () => {
    dispatch(registerHandler(true));
    dispatch(sidebarCloseHandler());
  };
  const openBookHandler = () => {
    dispatch(sidebarCloseHandler());
  };

  const { isSidebarOpen, theme, user } = useSelector((store) => store.user);
  return (
    <ThemeProvider theme={theme ? DarkTheme : BaseTheme}>
      <SidebarContainer>
        <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
          <div className="sidebar-header">
            {/* <p className="logo">logo</p> */}
            <button
              className="close-btn"
              type="button"
              onClick={() => dispatch(sidebarCloseHandler())}
            >
              <AiOutlineClose />
            </button>
          </div>
          <ul className="links">
            {!user && (
              <div>
                <li>
                  <div className="sublink">
                    <p>пункт меню</p>
                  </div>
                </li>
              </div>
            )}
          </ul>
          <div className="actions">
            {user && (
              <Button text="Выйти" onClick={() => dispatch(logOutUser())} />
            )}
            {!user && <Button text="Войти" onClick={openRegisterHandler} />}
          </div>
        </aside>
      </SidebarContainer>
    </ThemeProvider>
  );
};

const BaseTheme = {
  color: "var(--light-bg-primary)",
  color_text: "var(--light-text-primary)",
};

const DarkTheme = {
  color: "var(--dark-bg-primary)",
  color_text: "var(--dark-text-primary)",
};

const SidebarContainer = styled.div`
  .sidebar {
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    background: radial-gradient(circle, #94dce7, #86a5cf);
    z-index: 2;
    visibility: hidden;
  }
  .show-sidebar {
    /* transform: translate(0); */
    opacity: 1;
    transition-property: opacity;
    transition-duration: 1s;
    visibility: visible;
    /* z-index: 999; */
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    border-radius: 300px;
  }
  .close-btn {
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--blue-0);
    transition: var(--transition);
    cursor: pointer;
    position: absolute;
    top: 25px;
    right: 1.5rem;
  }
  .logo {
    justify-self: center;
    color: ${(props) => props.theme.color_text};
    font-size: 2rem;
    cursor: pointer;
  }
  ul {
    margin-bottom: 2rem;
    margin: auto;
  }
  li {
    font-size: 1.3rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: var(--transition2);
    width: 100%;
    cursor: pointer;
  }
  h4 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.color_text};
    color: var(--blue-0);
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
  .sublink {
    p {
      font-size: 1.3rem;
      margin: 0.5rem 1rem;
    }
  }

  .actions {
    display: flex;
    margin: 2rem;
    justify-content: space-between;
  }
  svg {
    font-size: 2.3rem;
    color: var(--blue-0);
    transition: var(--transition2);
    background-color: white;
    border-radius: 5px;
    :hover {
      scale: calc(1.05);
      box-shadow: var(--shadow-white-1);
    }
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
