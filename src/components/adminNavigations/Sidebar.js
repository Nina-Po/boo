import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { logOutAdmin } from "../../features/adminSlice";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sidebarCloseHandler } from "../../features/user/userSlise";
import { sublinks } from "../../assets/data";
import Button from "../../components-special/Button";

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    dispatch(sidebarCloseHandler());
    dispatch(logOutAdmin());
  };

  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <SidebarContainer>
      <aside className={isSidebarOpen ? `sidebar show-sidebar` : `sidebar`}>
        <div className="sidebar-header">
          <p className="logo">logo</p>
          <button
            className="close-btn"
            type="button"
            onClick={() => dispatch(sidebarCloseHandler())}
          >
            <AiOutlineClose />
          </button>
        </div>
        <ul className="links">
          {sublinks.map((item) => {
            const { links, page, pageId } = item;
            return (
              <li key={pageId}>
                <p>{page}</p>
                <div className="sidebar-sublinks">
                  {links.map((link) => {
                    const { url, label, id } = link;
                    return (
                      <div className="sublink" key={id}>
                        <p
                          className="sublink-label"
                          onClick={() => dispatch(sidebarCloseHandler())}
                        >
                          {label}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </li>
            );
          })}
          {/* <li>
            <p>Сотрудники</p>
          </li>
          <li onClick={logOutHandler}>
            <p>Выйти</p>
          </li> */}
        </ul>
        <div className="actions">
          <Button text="Выйти" onClick={() => dispatch(logOutAdmin())} />
        </div>
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .links {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: baseline;
    margin: auto;
  }
  li {
    font-size: 2rem;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    transition: var(--transition2);
    width: 100%;

    p {
      color: white;
    }
  }
  .sidebar-sublinks {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 1rem;
    .sublink {
      margin-right: 1rem;
      .sublink-label {
        font-size: 1rem;
      }
    }
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
    /* margin: 1rem 0.2rem; */
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
    top: 1rem;
    right: 1.5rem;
  }

  .logo {
    justify-self: center;
    /* height: 60px; */
    color: white;
    font-size: 2rem;
  }
  .links {
    margin-bottom: 2rem;
    margin: auto;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* transition: var(--transition); */
    opacity: 0;
    /* transform: translate(-100%); */
    background-color: var(--blue-1);
    /* z-index: -1; */
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
  .logo {
    cursor: pointer;
  }
  .actions {
    display: flex;
    margin: 2rem;
    justify-content: flex-end;
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
  .sublink-label {
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default SideBar;
