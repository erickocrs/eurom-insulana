import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components'
import logo from '~/assets/images/LOGO.png'
import './Header.scss';
import {
Row,
HeaderSection,
RightContainer,
OpenMenuStyleBar,
Logo,
LogoLink,
ButtonFreeQuote,
ButtonOpenMenu
} from './Header.styles'

export const Header = () => {
  
    const dispatch = useDispatch();

    const openMenu = () => {
      dispatch({
        type: "SET_MENU_OPEN",            
        open : true
      });
    }

    return (
        <HeaderSection className="HeaderSection">
          <Row>
            <LogoLink href="./">
              <Logo src={logo} className="Logo" alt="logo"/>
            </LogoLink>
            <RightContainer className="RightContainer">
              <ButtonFreeQuote className="ButtonFreeQuote">
                Orçamento Gratuito
              </ButtonFreeQuote>
              <ButtonOpenMenu onClick={openMenu} className="ButtonOpenMenu">
                <OpenMenuStyleBar/>
                <OpenMenuStyleBar/>
                <OpenMenuStyleBar/>
              </ButtonOpenMenu>
            </RightContainer>
            </Row>
        </HeaderSection>
    );
}

export default Header;