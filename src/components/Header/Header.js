import React from 'react'
import styled from 'styled-components'

import './Header.scss';

import logo from '~/assets/images/LOGO.png'

import Container from '~/components/Container/Container.js'

export const Header = () => {

    return (
        <HeaderSection className="HeaderSection">
          <Container>
            <Logo src={logo} className="Logo" alt="logo"/>
            <RightContainer className="RightContainer">
              <ButtonFreeQuote className="ButtonFreeQuote">
                <span>Orçamento Gratuito</span>
              </ButtonFreeQuote>
              <ButtonOpenMenu className="ButtonOpenMenu">
                <OpenMenuStyleBar/>
                <OpenMenuStyleBar/>
                <OpenMenuStyleBar/>
              </ButtonOpenMenu>
            </RightContainer>
          </Container>
        </HeaderSection>
    );
}

const HeaderSection = styled.header``;

const RightContainer = styled.div``;

const OpenMenuStyleBar = styled.div``;

const Logo = styled.img``;

const ButtonFreeQuote = styled.div``;

const ButtonOpenMenu = styled.div``;

export default Header;