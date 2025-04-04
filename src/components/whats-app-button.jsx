import styled from "styled-components";
import PropTypes from "prop-types";
import { FaWhatsapp } from "react-icons/fa";


const Icon = styled.span`
  font-size: 2.5rem;
  color:rgb(30, 30, 30);
  margin-top: 0.1rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 350px){
    font-size: 2rem;
  }

  &:hover {
    cursor: pointer;
    color: green;
    background-color: #f0f0f0;
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