import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

interface ModalProps {
  closeModal: () => void;
}

interface ModalPortalProps {
  isOpen: boolean;
  closeModal: () => void;
}

function Modal({ closeModal }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <ModalContainer>
      <ModalContent>
        <ModalTitle>🥳🥳축하합니다!!🥳🥳</ModalTitle>
        <ModalButton onClick={closeModal}>게임으로 돌아가기</ModalButton>
      </ModalContent>
    </ModalContainer>
  );
}

function ModalPortal({ isOpen, closeModal }: ModalPortalProps) {
  return isOpen
    ? ReactDOM.createPortal(
        <Modal closeModal={closeModal} />,
        document.getElementById("modal") as HTMLElement
      )
    : null;
}

export default ModalPortal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.695);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 30rem;
  height: 12rem;
  padding: 1.5rem;
  border-radius: 0.5rem;

  background-color: #fe60b4;
`;

const ModalTitle = styled.h2`
  font-family: ${(props) => props.theme.fontFamily};
  margin-top: 2rem;
  margin-bottom: 2rem;

  text-align: center;

  font-size: 2rem;
  font-weight: bold;
  color: black;
`;

const ModalButton = styled.button`
  justify-content: center;
  border-radius: 0.5rem;
  padding: 1rem 1.2rem;

  background-color: #080808;
  color: #fff;
  border: none;

  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #038738;
  }
`;
