import styled from '@emotion/styled';
import { useState } from "react";
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

const NavBarContainer = styled.div`
display: flex;
height: 72px;
padding: 10px 40px;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #A8A29E;

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
  background-color: ${colors.stone[300]};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  padding-bottom: 16px;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 610px) {
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media (min-width: 610px) {
    display: none;
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
  transition: transform 0.5s ease;  

  @media (max-width: 610px) {
    display: ${props => (props.menuVisible ? "none" : "block")};
    animation: ${rotate} 0.5s linear;
  }
`;

const CloseIcon = styled.div`
  display: none;
  cursor: pointer;
  color: black;
  position: absolute;
  right: 6px;
  top: 6px;
  z-index: 100;
  align-self: center;
  transition: transform 0.5s ease; 

  @media (max-width: 610px) {
    display: ${props =>
      props.menuVisible ? "block" : "none"};
      animation: ${rotate} 0.5s linear reverse;
  }
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

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(showMenu => !showMenu);
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
        <IoClose style={{height: "25px", width: "25px"}}/>
      </CloseIcon>

      <OptionsContainer>
        <Option >Sobre mí</Option>
        <Option >Servicios</Option>
        <Option >Blog</Option>
        <Option >Contacto</Option>
      </OptionsContainer>  

    
      <HamMenu visible={menuVisible}>
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
  )
}

export default Header;