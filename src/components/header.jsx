import styled from '@emotion/styled';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
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

  @media (max-width: 900px) {
    width: 75%;
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
width: 40%;
padding: 0.5rem 0;
`

const ImgHeader = styled.div`
display: flex;
flex-direction: column;
background-color: ${colors.blue[950]};
border-bottom-left-radius: 35%;
cursor: pointer;
`

const NavOptionsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 1rem 1.5rem 0 0;
background-color: white;
`

const NavOption = styled.a`
${typography.text.lg}
color: ${colors.blue[950]};
font-weight: 600;
padding: 1rem 0;
display: flex;
flex-directon: row;
align-items: center;
gap: 20px;
cursor: pointer;

@media (max-width: 500px) {
  ${typography.text.md};
}

@media (max-width: 300px) {
  ${typography.text.xs};
}
`

const TitleHeader = styled.h1`
${typography.head.sm};
color: white;
margin: 0;
text-align: center;
padding-bottom: 3rem;
`

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

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
        <Link to="/about" style={{textDecoration: "none"}}
          onClick={() => window.scrollTo(0, 0)}>
          <NavOption>Sobre mí
            <ImUser />
          </NavOption>
        </Link>
          
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