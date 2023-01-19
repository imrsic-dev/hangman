import React from "react";
import { createPortal } from "react-dom";
import { BackdropStyled, ModalStyled } from "./Modal.style";

const Backdrop = ({ onClose = () => null }) => {
  return <BackdropStyled onClick={onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div className="content">{props.children}</div>
    </ModalStyled>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
