import styled from '@emotion/styled';
import { useState } from "react";
import { keyframes, css } from '@emotion/react';
import logo from './../assets/images/logo.png'
import logoSideBar from './../assets/images/logo-hde.png'
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';
import { ImUser } from "react-icons/im";
import { GiBrain } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import Modal from "./modal"

const NavBarContainer = styled.div`
display: flex;
flex-direction: row;
padding: 10px 40px;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #A8A29E;
width: 80%;

@media (max-width: 610px) {
  padding: 10px 20px;
}
`

const ImgContainer = styled.img`
display: flex;

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

  @media (max-width: 610px) {
    display: none;
  }
`

const Option = styled.a`
${typography.head.xss}
color: ${colors.blue[950]};
margin: 0;
font-weight: 600;
padding: 16px 0;
`

const fadeIn = keyframes`
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0);
}
`

const fadeOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

const HamMenu = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  background-color: ${colors.stone[200]};
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${props => (props.visible ? "0" : "-250px")};
  transition: right 0.5s ease;
  z-index: 100;
  text-align: center;

  @media (max-width: 900px) {
    width: 80%;
    right: ${props => (props.visible ? "0" : "-80%")};
  }
`;

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
  border: 1px solid #1D2C60;

  @media (max-width: 610px) {
    display: ${props => (props.isOpen ? "none" : "block")};
  }
`;

const CloseIcon = styled.div`
  display: none;
  cursor: pointer;
  color: black;
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    display: ${props =>
      props.isOpen ? "block" : "none"};
  }
  margin: 1rem 1rem 0 0;
  align-self: flex-end;
`;

const HamLogo = styled.img`
display: flex;
width: 120px;
padding: 24px 0;
cursor: pointer;
border-bottom: 1px solid #A8A29E;

@media (max-width: 320px) {
  width: 100px;
}
`

const NavOptionsContainer = styled.div`
display: flex;
width: 70%;
flex-direction: column;
align-items: flex-end;
padding-top: 8px;
`

const NavOption = styled.a`
${typography.head.xss}
color: ${colors.blue[950]};
font-weight: 600;
padding: 16px 0;
display: flex;
flex-directon: row;
align-items: center;
gap: 20px;

@media (max-width: 420px) {
  ${typography.text.sm};
}
`

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const closeMenu  = () => {
    setIsOpen(false)
  }

  return (
    <>
    <NavBarContainer isOpen={isOpen}>
      <ImgContainer src={logo} alt='Neuro-dev' />

      <HamburgerIcon 
        onClick={toggleMenu}
        isOpen={isOpen}
        >
        <GiHamburgerMenu style={{height: "25px", width: "30px", padding: 4}}/>
      </HamburgerIcon>

      <OptionsContainer>
        <Option >Sobre mí</Option>
        <Option >Servicios</Option>
        <Option >Blog</Option>
        <Option >Contacto</Option>
      </OptionsContainer>  



      <HamMenu visible={isOpen}>

        <CloseIcon
          onClick={toggleMenu}
          isOpen={isOpen}
          rotate={rotate}
          >
          <IoClose style={{height: "25px", width: "25px"}}/>
        </CloseIcon>

        <HamLogo src={logoSideBar} alt='n-dev-sb' />
        <NavOptionsContainer>
          <NavOption>Sobre mí
            <ImUser />
          </NavOption>
          <NavOption>Servicios
            <GiBrain />
          </NavOption>
          <NavOption>Blog
            <FaPencil />
          </NavOption>
          <NavOption>Contacto
            <GrContact />
          </NavOption>
        </NavOptionsContainer>
      </HamMenu>

    </NavBarContainer>

    <Modal visible={isOpen} onClose={closeMenu} />
    </>
  )
}

export default Header;