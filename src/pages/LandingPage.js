import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import SideBar from "../components/userNavigation/SideBar";
import NavBar from "../components/userNavigation/NavBar";
import { useDispatch, useSelector } from "react-redux";
import book from "../images/cover_USWHXTKUJ.png";
import book2 from "../images/cover_UGS5T9PYA.png";
import RegisterModal from "../components/login/RegisterModal";
import { registerHandler } from "../features/user/userSlise";
import Button from "../components-special/Button";
import _ from "lodash";
import qr from "../images/qr-code.png";

const Landing = () => {
  const { user, isRegisterModal } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const openPageHandler = () => {
    if (!user) {
      dispatch(registerHandler(true));
    }
  };

  const buyBookHandler = () => {
    if (!user) {
      dispatch(registerHandler(true));
    }
  };

  return (
    <>
      <NavBar />
      <SideBar />
      <Wrapper>
        <LeftSection>
          <img src={book} alt="book" />
          <div className="open">
            <p>Вы можете открыть 30 страниц на выбор бесплатно</p>
            <p>Выберете страницу, с которой открыть (6c-192c)</p>
            <div className="actions">
              <input type="number" min="6" max="162" />
              <Button text="Открыть" onClick={openPageHandler} />
              <Button text="Купить книгу" onClick={buyBookHandler} />
            </div>
            {user && (
              <div className="qr-code">
                <img src={qr} alt="qr-code" />
                <div className="pay">
                  <p>
                    В назначении платежа необходимо указать "обучение" и после
                    оплаты нажать "Оплатил(а)"
                  </p>
                  <div className="pay-action">
                    <Button text="Оплатил" onClick={buyBookHandler} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </LeftSection>
        <RightSection>
          <p className="header">Сам Себе Гуру</p>
          <div className="hr"></div>
          <div className="about">
            <p className="about_header">О чем эта книга</p>
            <p className="about_info">
              Далеко-далеко за словесными горами в стране гласных, и согласных
              живут рыбные тексты. Единственное гор запятых безопасную вершину
              составитель моей переписывается, даже однажды текстами. Безопасную
              текстов страну грустный парадигматическая языкового он деревни
              прямо.
            </p>
          </div>
          <div className="autor">
            <div className="biography">
              <p className="biography_header">Биография</p>
              <p className="biography_info">
                Далеко-далеко за словесными горами, в стране гласных и согласных
                живут рыбные тексты. Переписали проектах запятой свое, родного,
                взобравшись наш собрал что он выйти реторический, жаренные
                пунктуация! Собрал свой проектах если. Предупредила, вершину.
                Далеко-далеко, за словесными горами в стране гласных и согласных
                живут рыбные тексты. Речью продолжил что выйти пояс. До скатился
                диких проектах однажды! Вскоре, большого собрал от всех вопроса
                предупредила о послушавшись проектах бросил?
              </p>
            </div>
            <div className="photo">
              <img src={book2} alt="" />
              <p>Ирина Леонович</p>
            </div>
          </div>
        </RightSection>
      </Wrapper>

      {isRegisterModal && <RegisterModal />}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  /* height: 100vh; */
  padding: 1rem;

  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    flex-direction: row;
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
const LeftSection = styled.div`
  /* border: 1px solid gray; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  @keyframes glowing-animation {
    0% {
      filter: drop-shadow(0 0 10px #7b5c36) drop-shadow(0 0 20px #bdb74b)
        drop-shadow(0 0 30px #9d6826);
    }
    50% {
      filter: drop-shadow(0 0 20px #7b5c36) drop-shadow(0 0 40px #bdb74b)
        drop-shadow(0 0 60px #9d6826);
    }
    100% {
      filter: drop-shadow(0 0 10px #7b5c36) drop-shadow(0 0 20px #bdb74b)
        drop-shadow(0 0 30px #9d6826);
    }
  }
  img {
    width: 280px;
    animation: glowing-animation 10s infinite ease-in-out;
    /* filter: drop-shadow(0 0 10px #7b5c36) 
      drop-shadow(0 0 20px #bdb74b) 
      drop-shadow(0 0 30px #9d6826);  */
  }
  .open {
    border: 2px solid #19365d;
    padding: 1.5rem;
    background: rgba(107, 75, 33, 0.2);
    border-radius: 8px;
    box-shadow: var(--shadow-white-1);
    p {
      font-size: 1.4rem;
      font-family: "Neucha", cursive;
      color: var(#19365d);
    }
    .actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
    input {
      padding: 0.2rem;
      border-radius: 5px;
      width: 80px;
      font-size: 1.2rem;
      display: flex;
      text-align: center;
      text-justify: center;
      cursor: pointer;
    }
    .qr-code {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-top: 1rem;
      justify-content: space-between;
      align-items: center;
      img {
        width: 150px;
        filter: inherit;
        animation: inherit;
        box-shadow: var(--shadow-white-1);
      }
      p {
        margin: 1rem;
      }
    }
  }
  .pay-action {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 576px) {
    img {
      margin-top: 2rem;
      width: 350px;
    }
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: 50%;
    .open {
      .qr-code {
        flex-direction: row;
        margin-top: 0;
      }
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;

const RightSection = styled.div`
  /* border: 1px solid gray; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    font-size: 2.5rem;
    margin: 1rem;
    font-family: "Pacifico", cursive;
  }
  .hr {
    width: 300px;
    height: 1px;
    background: var(--border-1);
  }
  .about {
    font-family: "Neucha", cursive;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .about_header {
      font-size: 1.5rem;
      margin: 1rem;
    }
    .about_info {
      font-size: 1.4rem;
      text-indent: 1rem;
      line-height: 1.7rem;
      ::first-letter {
        color: blue;
        font-weight: bold;
        font-size: 2rem;
        margin: 0;
        padding: 0;
      }
    }
  }
  .autor {
    display: flex;
    flex-direction: column;
    align-items: center;
    .photo {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Neucha", cursive;
      img {
        width: 280px;
      }
    }
  }
  .biography {
    font-family: "Neucha", cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;

    .biography_header {
      font-size: 1.5rem;
      margin: 1rem;
    }
    .biography_info {
      font-size: 1.4rem;
      text-indent: 1rem;
      text-align: justify;
      line-height: 1.7rem;
      ::first-letter {
        color: blue;
        font-weight: bold;
        font-size: 2rem;
        margin: 0;
        padding: 0;
      }
    }
  }
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    width: 50%;
    .header {
      font-size: 3rem;
    }
    .autor {
      flex-direction: row;
    }
  }
  @media (min-width: 1200px) {
  }
  @media (min-width: 1400px) {
  }
`;
export default Landing;
