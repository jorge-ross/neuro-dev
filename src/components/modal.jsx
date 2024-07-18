import styled from "@emotion/styled";
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  z-index: 99;
`;

const Modal = ({ visible, onClose }) => {
  return <ModalOverlay visible={visible} onClick={onClose} />;
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;