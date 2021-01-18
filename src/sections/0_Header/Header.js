import React from 'react'
import styled from 'styled-components'
import logo from '~/assets/images/LOGO.png'
import './Header.scss';
import {
Row,
HeaderSection,
RightContainer,
OpenMenuStyleBar,
Logo,
ButtonFreeQuote,
ButtonOpenMenu
} from './Header.styles'

export const Header = () => {

    return (
        <HeaderSection className="HeaderSection">
          <Row>
            <Logo src={logo} className="Logo" alt="logo"/>
            <RightContainer className="RightContainer">
              <ButtonFreeQuote className="ButtonFreeQuote">
                Orçamento Gratuito
              </ButtonFreeQuote>
              <ButtonOpenMenu className="ButtonOpenMenu">
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