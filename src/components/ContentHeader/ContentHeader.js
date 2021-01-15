import React from 'react'
import styled from 'styled-components'

import './ContentHeader.scss';

import ContentImageSrc from '~/assets/images/imagem_home_covid19.png'

import Container from '~/components/Container/Container.js'

export const Header = () => {

    return (
        <ContentHeaderSection className="ContentHeaderSection">
          <Container>
            <ContentImage className="ContentImage" src={ContentImageSrc}/>
            <ContentText className="ContentText">
                <Text className="Text">As mais avançadas soluções de higienização Covid-19.</Text>
                <Button className="Button">Descubra mais</Button>
            </ContentText>
          </Container>
        </ContentHeaderSection>
    );
}

const ContentHeaderSection = styled.section``;

const ContentImage = styled.img``;

const ContentText = styled.div``;

const Text = styled.h2``;

const Button = styled.div``;


export default Header;