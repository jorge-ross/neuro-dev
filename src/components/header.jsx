import styled from '@emotion/styled';
import { slide as Menu } from 'react-burger-menu';
import logo from './../assets/images/logo.png'
import { typography } from '../styles/typography';
import { colors } from '../styles/colors';
import { useState } from 'react';


const NavBarContainer = styled.div`
display: flex;
height: 70px;
padding: 10px 40px;
align-items: center;
justify-content: space-between;
`

const ImgContainer = styled.img`
display: flex;
height: 90px;
width: 164px;
cursor: pointer;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 26px;

`

const Option = styled.a`
${typography.head.xss}
color: ${colors.blue[900]};
margin: 0;
font-weight: 500;
`

function Header() {

  const [isOpen, setIsOpen] = useState();

  return (
    <NavBarContainer>
      <ImgContainer src={logo} alt='Neuro-dev' />
      <OptionsContainer>
          <Option >Sobre mí</Option>
          <Option >Servicios</Option>
          <Option >Blog</Option>
          <Option >Contacto</Option>
        </OptionsContainer>
    </NavBarContainer>
  )
}

export default Header;