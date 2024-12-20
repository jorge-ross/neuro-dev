import styled from '@emotion/styled';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import logond from '../assets/images/logond.png';
import logoSideBar from './../assets/images/logow.png'
import { typography } from '../styles/typography';
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5';
import { ImUser } from "react-icons/im";
import { GiBrain } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import Modal from "./modals/modal"

const Gral = styled.div`
background: white;
width: 100%;
display: flex;
justify-content: center;
border-bottom: 1px solid black;
height: 70px;
position: fixed;
top: 0;
z-index: 10;
`

const NavBarContainer = styled.div`
display: flex;
padding: 1rem 2rem;
align-items: center;
justify-content: space-between;
width: 95%;


  @media (max-width: 700px) {
    padding: 1rem 1.5rem;
  }
`

const OptionsContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 700px) {
    display: none;
  }
`

const BrandTitle = styled.h3`
  ${typography.head.smx}
  margin: 0;
  color: black;
  font-weight: 600;

  @media (max-width: 330px) {
    ${typography.head.xs};
  }
`;

const BrandHomeLink = styled(Link)`
  align-items: center;
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
`;

const Option = styled.p`
${typography.head.xss}
color: black;
margin: 0;
font-weight: 600;
padding: 16px 0;
`

const HamMenu = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  flex-direction: column;
  width: 250px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${props => (props.visible ? "0" : "-250px")};
  transition: right 0.5s ease;
  z-index: 100;
  background-color: white;
  border-left: 2px solid #1D2C60;

  @media (max-width: 700px) {
    width: 70%;
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
  color: black;
  position: absolute;
  right: 1.5rem;
  padding-top: 4px;
  border: 1px solid #1D2C60;

  @media (max-width: 700px) {
    display: ${props => (props.isOpen ? "none" : "block")};
  }
`;

const CloseIcon = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  transition: transform 0.5s ease;

  @media (max-width: 900px) {
    display: ${props =>
      props.isOpen ? "block" : "none"};
  }
  margin: .75rem .75rem 0 0;
  align-self: flex-end;
`;

const Logo = styled.img`
display: flex;
align-self: center;
width: 35%;
padding: 0.5rem 0;
`

const ImgHeader = styled.div`
display: flex;
flex-direction: column;
background-color: black;
border-bottom-left-radius: 35%;
cursor: pointer;
`

const NavOptionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 1.5rem 1.5rem 0 0;
background-color: white;
gap: 1.5rem;
`

const NavOption = styled(Link)`
  ${typography.text.lg}
  color: black;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 500px) {
    ${typography.text.md};
  }

  @media (max-width: 300px) {
    ${typography.text.xs};
  }
`;

const HamOption = styled(Link)`
  ${typography.text.lg}
  color: black;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-bottom: 0.2rem;
  border-bottom: 1px solid black;

  @media (max-width: 500px) {
    ${typography.text.md};
  }

  @media (max-width: 300px) {
    ${typography.text.xs};
  }
`;

const TitleHeader = styled.h1`
  ${typography.head.md};
  color: white;
  margin: 0;
  text-align: center;
  padding-bottom: 3rem;

  @media (max-width: 400px) {
    ${typography.head.sm};
  }

  @media (max-width: 300px) {
    ${typography.head.xss};
  }
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`

const LogoImgCont = styled.img`
  max-width: 2rem;
`

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const closeMenu  = () => {
    setIsOpen(false)
  }

  const handleScrollToFooter = () => {
    const footerElement = document.getElementById('contact');
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }
  return (
    <Gral>
    <NavBarContainer isOpen={isOpen}>
      <BrandContainer>
        <BrandHomeLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <LogoImgCont src={logond} alt="logo" />
          <BrandTitle>Neuro-dev</BrandTitle>
        </BrandHomeLink>
      </BrandContainer>

      <HamburgerIcon 
        onClick={toggleMenu}
        isOpen={isOpen}
        >
        <GiHamburgerMenu style={{height: "25px", width: "30px", padding: 4}}/>
      </HamburgerIcon>

      <OptionsContainer>
        <NavOption to="/about" onClick={() => window.scrollTo(0, 0)}>
            <Option>Sobre mí</Option>
        </NavOption>
        <NavOption to="/services" onClick={() => window.scrollTo(0, 0)}>
            <Option>Servicios</Option>
        </NavOption>
        <Option >Blog</Option>
        <NavOption onClick={handleScrollToFooter}>
            <Option>Contacto</Option>
        </NavOption>
      </OptionsContainer>  

      <HamMenu visible={isOpen}>

    {/* Hamburger Menu Options */}

        <ImgHeader>
        <CloseIcon
          onClick={toggleMenu}
          isOpen={isOpen}
          rotate={rotate}
          >
          <IoClose style={{height: "25px", width: "25px"}}/>
        </CloseIcon>
        <StyledLink to="/" onClick={() => window.scrollTo(0, 0)}>
          <Logo src={logoSideBar} alt='n-dev-sb' />
          <TitleHeader>
            Neuro-dev
          </TitleHeader>
        </StyledLink>
        </ImgHeader>

        <NavOptionsContainer>
          <HamOption to="/about" onClick={() => window.scrollTo(0, 0)}>
            Sobre mí
            <ImUser />
          </HamOption>

          <HamOption to="/services" onClick={() => window.scrollTo(0, 0)}>
            Servicios
            <GiBrain />
          </HamOption>

          <HamOption>Blog
            <FaPencil />
          </HamOption>

          <HamOption onClick={handleScrollToFooter}>
            Contacto
            <GrContact />
          </HamOption>
        </NavOptionsContainer>
      </HamMenu>

    </NavBarContainer>

    <Modal visible={isOpen} onClose={closeMenu} />
    </Gral>
  )
}

export default Header;