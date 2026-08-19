import styled from "styled-components";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";


const Icon = styled.span`
  font-size: 2rem;
  color: #128C7E;
  margin-top: 0.1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: #25D366;
    border-radius: 50%;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => {

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (

    <Icon onClick={handleClick}>
      <FaWhatsapp />
    </Icon>

  );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default WhatsAppButton;