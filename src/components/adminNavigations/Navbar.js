import React from "react";
import styled from "styled-components";
import { sidebarOpenHandler } from "../../features/user/userSlise";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {} from "../../features/user/userSlise";

import Navlinks from "./Navlinks";

const NavBar = () => {
  const { user, isModal, isSubmenu } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div>
            <p className="logo">logo</p>
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
  font-family: "Philosopher", sans-serif;

  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    /* ! important */
    align-self: stretch;
    width: 90vw;
    margin: 0;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: white;
    border: transparent;
    transition: var(--transition2);
    color: var(--blue-0);
    border-radius: 5px;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    :hover {
      scale: calc(1.05);
      box-shadow: var(--shadow-white-1);
    }
    cursor: pointer;
  }

  .name {
    padding: 0.5rem;
    border-radius: 5px;
    border: 2px solid var(--color-3);
    box-shadow: var(--shadow-4);
    cursor: pointer;
    transition: 1s;
    :hover {
    }
    p {
      font-size: 1.3rem;
    }
  }
  svg {
    font-size: 2.3rem;
    color: var(--blue-0);
    transition: var(--transition2);
    :hover {
      color: var(--blue-05);
    }
  }
  .logo {
    color: white;
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
  }
`;

export default NavBar;
