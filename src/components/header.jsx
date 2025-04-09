import styled from '@emotion/styled';
import { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import logond from '../assets/images/logond.png';
import logoSideBar from './../assets/images/logow.png'
import { typography } from '../styles/typography';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoClose } from 'react-icons/io5';
import { ImUser } from "react-icons/im";
import { GiBrain } from "react-icons/gi";
import { FaPencil } from "react-icons/fa6";
import { GrContact } from "react-icons/gr";
import { MdPsychology, MdAssessment } from "react-icons/md";
import Modal from "./modals/modal"
import { colors } from '../styles/colors';

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
display: flex;
align-items: center;
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

const DropNavOption = styled.div`
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

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  background: black;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
`;

const DropdownItem = styled(Link)`
  margin: 0;
  padding: 0.75rem 1.25rem;
  text-decoration: none;
  color: white;
  transition: background 0.3s;

  &:hover {
    background: ${colors.stone[600]};
  }
`;

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsClicked((prev) => (!prev));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(prevOpen => !prevOpen);
  };

  const closeMenu = () => {
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
          <GiHamburgerMenu style={{ height: "25px", width: "30px", padding: 4 }} />
        </HamburgerIcon>

        <OptionsContainer>
          <NavOption to="/jorge-ros-acerca-de-neurodev" onClick={() => window.scrollTo(0, 0)}>
            <Option>Acerca de</Option>
          </NavOption>

          <DropNavOption ref={dropdownRef}>
            <Option onClick={toggleDropdown}>Servicios
              <IoMdArrowDropdown style={{ paddingLeft: 3 }} />
            </Option>
            {isClicked && (
              <DropdownMenu>
                <DropdownItem to="/psicologia" onClick={() => window.scrollTo(0, 0)}>Psicología</DropdownItem>
                <DropdownItem to="/neuropsicologia" onClick={() => window.scrollTo(0, 0)}>Neuropsicología</DropdownItem>
                <DropdownItem to="/consultoria" onClick={() => window.scrollTo(0, 0)}>Consultoría</DropdownItem>
              </DropdownMenu>
            )}
          </DropNavOption>

          <NavOption to="/blog" onClick={() => window.scrollTo(0, 0)}>
            <Option>Blog</Option>
          </NavOption>

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
              <IoClose style={{ height: "25px", width: "25px" }} />
            </CloseIcon>
            <StyledLink to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
              <Logo src={logoSideBar} alt='n-dev-sb' />
              <TitleHeader>
                Neuro-dev
              </TitleHeader>
            </StyledLink>
          </ImgHeader>

          <NavOptionsContainer>
            <HamOption to="/jorge-ros-acerca-de-neurodev" onClick={() => window.scrollTo(0, 0)}>
              Acerca de
              <ImUser />
            </HamOption>

            <HamOption to="/psicologia" onClick={() => window.scrollTo(0, 0)}>
              Psicología
              <MdPsychology />
            </HamOption>

            <HamOption to="/neuropsicologia" onClick={() => window.scrollTo(0, 0)}>
              Neuropsicología
              <GiBrain />
            </HamOption>

            <HamOption to="/consultoria" onClick={() => window.scrollTo(0, 0)}>
              Consultoría
              <MdAssessment />
            </HamOption>

            <HamOption to="/blog" onClick={() => window.scrollTo(0, 0)}>
              Blog
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