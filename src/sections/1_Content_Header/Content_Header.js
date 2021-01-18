import React from 'react'
import ContentImageSrc from '~/assets/images/imagem_home_covid19.png'
import GuideToScrollBar from './GuideToScrollBar/GuideToScrollBar'
import SocialNetworkIcons from './SocialNetworkIcons/SocialNetworkIcons'
import {
  Row,
  ContentHeaderSection,
  ContentImage,
  ImageContainer,
  LightLeak,
  ContentText,
  Text,
  Button
} from './Content_Header.styles.js';
import './Content_Header.scss';

export const ContentHeader = () => {

    const SectionEl = React.useRef(null);

    const [scrolling, setScrolling] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [animate, setAnimate] = React.useState(false);    
      
    const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);
    
    React.useEffect(() => {
        if(!animate && scrollTop + 100 > SectionEl.current.offsetTop) {
            setAnimate(true);
            window.removeEventListener("scroll", onScroll);
        }
    }, [scrollTop]);
    
    return (
        <ContentHeaderSection ref={SectionEl}>
          <Row left>
            <ImageContainer>
              <ContentImage className="ContentImage" src={ContentImageSrc}/>
              <LightLeak animate={animate}/>
            </ImageContainer>
            <ContentText className="ContentText">
                <Text className="Text" animate={animate}>As mais avançadas soluções de <strong>higienização Covid-19</strong>.</Text>
                <Button className="Button" animate={animate}>Descubra mais</Button>
            </ContentText>
          </Row>
          <Row right>
            <SocialNetworkIcons/>
          </Row>
          <Row center>
            <GuideToScrollBar/>
          </Row>
        </ContentHeaderSection>
    );
}

export default ContentHeader;