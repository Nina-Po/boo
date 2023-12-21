import React from "react";
import styled from "styled-components";
import { sublinks } from "../../assets/data";
import { logOutAdmin } from "../../features/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import { pageIdHandler } from "../../features/user/userSlise";

const Navlinks = () => {
  const { pageId } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logOutAdmin());
  };

  const submenuHandler = (e) => {
    // console.log("e.target=", e.target);
    if (!e.target.classList.contains("nav-link")) {
      dispatch(pageIdHandler(null));
    }
  };

  return (
    <Wrapper onMouseOver={submenuHandler}>
      <div className="nav-links">
        {sublinks.map((item) => {
          const { pageId, page } = item;
          return (
            <button
              key={pageId}
              className="nav-link"
              onMouseEnter={() => dispatch(pageIdHandler(pageId))}
            >
              {page}
            </button>
          );
        })}
        <button className="nav-link" onClick={logOutHandler}>
          Выйти
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .nav-links {
    display: none;
    align-items: center;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .nav-links {
      display: flex;
      justify-content: center;
      /* ! important */
      align-self: stretch;
    }
    .nav-link {
      font-family: "Philosopher", sans-serif;
      border: transparent;
      /* border: 2px solid blue; */
      padding: 0 1rem;
      background: transparent;
      cursor: pointer;
      color: white;
      font-size: 1.3rem;
      transition: 0.3s;
      :hover {
        border-bottom: 1px solid white;
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Navlinks;
