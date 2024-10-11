import styled from "styled-components";
import PropTypes from "prop-types";
import { typography2 } from "../styles/typography";
import { FaWhatsapp  } from "react-icons/fa";

const WhatsButton = styled.button`
  ${typography2.text.sm}
  width: 100%;;
  height: 40px;
  padding: 0.7rem 2rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
   @media (max-width: 350px){
    ${typography2.text.xs}
    line-height: 1.2;
  }
`

const Icon = styled.span`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: white;
  display: flex;

  @media (max-width: 350px){
    margin-right: 0.5rem;
    font-size: 10px;
  }
`;

const WhatsAppButton = ({ phoneNumber, message }) => {
   
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <WhatsButton onClick={handleClick} >
            <Icon><FaWhatsapp /></Icon> 
            +52 55 5555-5555
        </WhatsButton>
    );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default WhatsAppButton;