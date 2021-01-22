import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ScrollMarker from '~/components/Scroll/ScrollMarker'
import ContentImageSrc from '~/assets/images/imagem_home_covid19.png'
import GuideToScrollBar from './GuideToScrollBar/GuideToScrollBar'
import SocialNetworkIcons from './SocialNetworkIcons/SocialNetworkIcons'
import {
  Row,
  ContentRow,
  ContentHeaderSection,
  ContentImage,
  ImageContainer,
  ImageBox,
  LightLeak,
  ContentText,
  Text,
  Button
} from './Content_Header.styles.js';
import './Content_Header.scss';

export const ContentHeader = () => {

    const [animate, setAnimate] = React.useState(false);    

    const scrollReducer = useSelector((state) => state.scrollReducer);  

    React.useEffect(() => {
        
        if( scrollReducer.targetList[scrollReducer.currentTarget] &&
            scrollReducer.targetList[scrollReducer.currentTarget].markerName == "Header")
        {
            setAnimate(true);
        }
        
    }, [scrollReducer]);
    
    return (        
        <ContentHeaderSection>
          <ScrollMarker absolute markerName="Header"/>
          <GuideToScrollBar/>
          <SocialNetworkIcons/>
          <ContentRow center>
            <ImageContainer>              
              <ImageBox>
                <ContentImage className="ContentImage" src={ContentImageSrc} alt="Profissional de higienização em roupa totalmente protegida, com óculos e protetores auriculares. Segurando um higienizador, com uma estrutura de vírus corona ao fundo."/>
                <LightLeak animate={animate}/>
              </ImageBox>
            </ImageContainer>
            <ContentText className="ContentText">
                <Text className="Text" animate={animate}>As mais avançadas soluções de <strong>higienização Covid-19</strong>.</Text>
                <Button className="Button" animate={animate}>Descubra mais</Button>
            </ContentText>
          </ContentRow>
        </ContentHeaderSection>
    );
}

export default ContentHeader;