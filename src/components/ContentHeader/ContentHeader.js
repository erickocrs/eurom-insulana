import React from 'react'
import ContentImageSrc from '~/assets/images/imagem_home_covid19.png'
import Container from '~/components/Container/Container'
import GuideToScrollBar from '~/components/GuideToScrollBar/GuideToScrollBar'
import {
  ContentHeaderSection,
  ContentImage,
  ContentText,
  Text,
  Button
} from './ContentHeader.styles.js';
import './ContentHeader.scss';

export const ContentHeader = () => {

    return (
        <ContentHeaderSection>
          <Container>''
            <ContentImage className="ContentImage" src={ContentImageSrc}/>
            <ContentText className="ContentText">
                <Text className="Text">As mais avançadas soluções de higienização Covid-19.</Text>
                <Button className="Button">Descubra mais</Button>
            </ContentText>
          </Container>
          <GuideToScrollBar/>
        </ContentHeaderSection>
    );
}

export default ContentHeader;