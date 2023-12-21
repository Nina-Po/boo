import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { sidebarOpenHandler } from "../../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/images/logo.jpg";

import Navlinks from "./NavLinks.js.js";

const NavBar = () => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo" onClick={() => navigate("/")}>
            <p>Сам Себе Гуру</p>
          </div>
          <button
            type="button"
            className="nav-toggle"
            onClick={() => dispatch(sidebarOpenHandler())}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <Navlinks />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 1px solid var(--border-1);
  border-bottom: 1px solid var(--border-1);
  box-shadow: 0px 4px 25px 0px var(--border-1);
  .nav-center {
    display: flex;
    width: 95vw;
    margin: 0;
    align-items: center;
    justify-content: space-between;
  }
  .nav-header {
    display: flex;
    align-items: center;
    align-items: baseline;
  }
  .nav-toggle {
    border: transparent;
    transition: var(--transition2);
    color: var(--border-1);
    border-radius: 5px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: white;
    :hover {
      scale: calc(1.05);
      box-shadow: var(--shadow-white-1);
    }
    svg {
      font-size: 2.3rem;
      color: var(--border-1);
      transition: 1s;
      cursor: pointer;
    }
    cursor: pointer;
  }

  .logo {
    p {
      font-size: 2rem;
      font-family: "Pacifico", cursive;
    }
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      /* display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: end; */
    }
    .nav-header {
      justify-content: space-around;
    }
    .toggle {
      display: block;
    }
  }
`;

export default NavBar;
