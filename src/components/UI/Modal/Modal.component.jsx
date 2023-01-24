import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { BackdropStyled, ModalStyled } from './Modal.style';

const Backdrop = ({ onClose = () => null }) => {
  return <BackdropStyled onClick={onClose} />;
};

Backdrop.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const ModalOverlay = ({children}) => {
  return (
    <ModalStyled>
      <div className="content">{children}</div>
    </ModalStyled>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node,
};


const portalElement = document.getElementById('overlays');

const Modal = ({onClose, children}) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
};


export default Modal;
