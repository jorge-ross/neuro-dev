import styled from '@emotion/styled';
import { useState } from "react";
import { keyframes } from '@emotion/react';
import logo from './../assets/images/logo.png'
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';


const NavBarContainer = styled.div`
display: flex;
height: 70px;
padding: 10px 40px;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #A8A29E;

@media (max-width: 600px) {
  padding: 10px 20px;
}
`

const ImgContainer = styled.img`
display: flex;
height: 90px;
width: 164px;
cursor: pointer;

@media (max-width: 300px) {
  height: 80px;
  width: 144px;
}
`

const OptionsContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 26px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Option = styled.a`
${typography.head.xss}
color: ${colors.blue[900]};
margin: 0;
font-weight: 500;
`

const HamMenu = styled.div`
  display: ${props => (props.menuVisible ? "block" : "none")}; 
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-bottom: 16px;
  text-align: center;
  
  @media (max-width: 600px) {
    background-color: gray;
    width: 90%;
    position: absolute;
    top: 10%;
    display: flex;
    flex-direction: column;
  }
`;


const HamOption = styled.a`
${typography.head.xss}
color: ${colors.blue[900]};
margin: 0;
font-weight: 500;
padding: 16px 0;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  color: ${colors.blue[950]};
  position: absolute;
  right: 20px;
  padding-top: 4px;
  transition: transform 0.5s ease;  

  @media (max-width: 600px) {
    display: ${props => (props.menuVisible ? "none" : "block")};
    animation: ${rotate} 0.5s linear;
  }
`;

const CloseIcon = styled.div`
  display: none;
  cursor: pointer;
  color: black;;
  position: absolute;
  right: 16px;
  align-self: center;
  transition: transform 0.5s ease; 

  @media (max-width: 600px) {
    display: ${props =>
      props.menuVisible ? "block" : "none"};
      animation: ${rotate} 0.5s linear reverse;
  }
`;

function Header() {

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(prevMenuVisible => !prevMenuVisible);
  };

  return (
    <NavBarContainer menuVisible={menuVisible}>
      <ImgContainer src={logo} alt='Neuro-dev' />

      <HamburgerIcon 
        onClick={toggleMenu}
        menuVisible={menuVisible}
        >
        <GiHamburgerMenu style={{height: "40px", width: "40px"}}/>
      </HamburgerIcon>

      <CloseIcon
        onClick={toggleMenu}
        menuVisible={menuVisible}
        >
        <IoClose style={{height: "45px", width: "45px"}}/>
      </CloseIcon>

      <OptionsContainer>
        <Option >Sobre mí</Option>
        <Option >Servicios</Option>
        <Option >Blog</Option>
        <Option >Contacto</Option>
      </OptionsContainer>  

    
      <HamMenu menuVisible={menuVisible}>
        <HamOption >Sobre mí</HamOption>
        <HamOption >Servicios</HamOption>
        <HamOption >Blog</HamOption>
        <HamOption >Contacto</HamOption>
      </HamMenu>

    </NavBarContainer>
  )
}

export default Header;