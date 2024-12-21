import styled from "styled-components";
import PropTypes from "prop-types";
import { typography } from "../styles/typography";
import { FaWhatsapp  } from "react-icons/fa";

const WhatsButton = styled.button`
  ${typography.text.sm};
  width: 75%;
  height: 50px;
  padding: 0.7rem 2rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px){
    width: 100%;
  }

  &:hover {
    background-color: #292929;
  }
`

const Icon = styled.span`
  margin-right: 0.6rem;
  font-size: 1.2rem;
  color: white;
  margin-top: 0.1rem;

  @media (max-width: 350px){
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }
`;

const WhatsAppButton = ({ phoneNumber }) => {
   
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    const handleClick = () => {
        window.open(whatsappUrl, '_blank');
    };

    return (
        <WhatsButton onClick={handleClick} >
            <Icon><FaWhatsapp /></Icon> 
            55 5555 5555
        </WhatsButton>
    );
};

WhatsAppButton.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
};

export default WhatsAppButton;