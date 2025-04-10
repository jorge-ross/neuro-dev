import PropTypes from 'prop-types';
import styled from 'styled-components';
import { typography } from '../../styles/typography';
import { FaTimes } from 'react-icons/fa';
import { colors } from '../../styles/colors';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContent = styled.div`
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  max-height: 70vh;
  overflow-y: auto;

  @media (max-width: 750px) {
    max-width: 300px;
  }

  p {
    margin: 0 0 1rem 0;
    ${typography.text.sm};
    color: black;
    text-align: justify;
    line-height: 1.2rem;
  }

  li {
    ${typography.text.sm};
    line-height: 1.2rem;
  }

  h2 {
    ${typography.head.smx};
    margin: 1rem 0;
    color: black;
  }

  h3 {
    ${typography.head.xs};
    margin: 1rem 0;
    color: black;
  }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: none;
    border: none;
    color: ${colors.stone[400]};
    font-size: 1.5rem;
    cursor: pointer;
  
    &:hover {
      color: ${colors.stone[500]};
    }
  `;

const GralModal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

GralModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default GralModal;
