import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sublinks } from "../../assets/data";
import { pageIdHandler } from "../../features/user/userSlise";
import styled from "styled-components";

const Submenu = () => {
  const { pageId } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const submenuContainer = useRef(null);

  // console.log(pageId);
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  // console.log(currentPage);

  const mouseLeaveHandler = (e) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom, top } = submenu.getBoundingClientRect();
    const { clientX, clientY } = e;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      dispatch(pageIdHandler(null));
    }

    // console.log(clientX, clientY);
    // console.log("left=", left);
    // console.log("right=", right);
    // console.log("bottom=", bottom);
    // console.log("top=", top);
  };

  return (
    <Wrapper>
      <div
        className={currentPage ? "submenu show-submenu" : "submenu"}
        onMouseLeave={mouseLeaveHandler}
        ref={submenuContainer}
      >
        <h4>{currentPage?.page}</h4>
        <div
          className="submenu-links"
          style={{
            gridTemplateColumns:
              currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
          }}
        >
          {currentPage?.links?.map((link) => {
            const { id, url, label } = link;
            return <p key={id}>{label}</p>;
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .submenu {
    display: none;
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    .submenu {
      display: block;
      position: fixed;
      top: 7rem;
      width: 70vw;
      background-color: white;
      left: 50%;
      padding: 2rem;
      transform: rotateX(-90deg) translateX(-50%);
      transform-origin: top;
      perspective: 1000px;
      visibility: hidden;
      border-radius: 5px;
      opacity: 0;
      transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
      z-index: -1;
      h4 {
        margin-bottom: 1rem;
        color: var(--blue-0);
      }
    }
    .show-submenu {
      visibility: visible;
      opacity: 1;
      transform: rotateX(0deg) translate(-50%);
      z-index: 10;
    }
    .submenu-links {
      display: grid;
      row-gap: 0.5rem;
      p {
        display: block;
        color: var(--blue-0);
        font-size: 1.1rem;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Submenu;
