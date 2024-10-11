import styled from "styled-components";
import PropTypes from "prop-types";
import { typography } from "../styles/typography";
import { FaPhoneAlt } from "react-icons/fa";

const WhatsButton = styled.button`
  ${typography.text.sm}
  max-width: 220px;
  padding: 0.75rem 1.5rem;
  background-color: black;
  color: white;
  border-radius: 0.7rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.span`
  margin-right: 1rem;
  font-size: 20px;
  color: white;
`;

const WhatsAppButton = ({ phoneNumber, message }) => {
   
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <WhatsButton onClick={handleClick} >
            <Icon><FaPhoneAlt /></Icon> 
            +52 55 5555 5555
        </WhatsButton>
    );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default WhatsAppButton;