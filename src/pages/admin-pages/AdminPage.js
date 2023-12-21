import React from "react";
import styled from "styled-components";
import Button from "../../components-special/Button";
import { logOutAdmin } from "../../features/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/adminNavigations/Navbar";
import Sidebar from "../../components/adminNavigations/Sidebar";
import SubMenu from "../../components/adminNavigations/Submenu";
import { closeSubmenuHandler } from "../../features/user/userSlise";

const AdminPage = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar />
      <Sidebar />
      <SubMenu />
      <Wrapper></Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  section {
    width: 100vw;
    height: 20px;
    background-color: gray;
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

export default AdminPage;
