import styled from "styled-components";
import { logOutUser } from "../features/user/userSlise";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Button from "../components-special/Button";

const PersonamArea = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {/* <NavBar />
      <SideBar /> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
export default PersonamArea;
