import React from 'react'
import {
Section,
Infos,
Title,
Text,
Button,
BlueCircle,
ImageBox,
ImageContainer,
Image,
BlueCircleDesign,
WhiteCircleDesign,
LineCircleDesign
} from './Content_SaibaMais.styles'
import imageSrc from '~/assets/images/Quem_somos.png'
import Row from '~/components/Row/Row'

export const Content_SaibaMais = () => {
    
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
        if(!animate && scrollTop + 800 > SectionEl.current.offsetTop) {
            setAnimate(true);
            window.removeEventListener("scroll", onScroll);
        }
    }, [scrollTop]);
    
    return(
        <Section ref={SectionEl}>
            <Row left>
                <ImageBox>
                    <ImageContainer animate={animate}>
                        <Image  src={imageSrc}/>
                        <BlueCircleDesign animate={animate}/>
                        <WhiteCircleDesign animate={animate}/>
                        <LineCircleDesign animate={animate}/>
                    </ImageContainer>
                </ImageBox> 
                <Infos> 
                    <BlueCircle animate={animate}/>
                    <Title animate={animate}>Fique a conhecer-nos melhor.</Title>
                    <Text animate={animate}>Uma história assente na qualidade, visão e empreendedorismo ao serviço das pessoas.</Text>
                    <Button animate={animate}>Saiba mais</Button>                    
                </Infos>
            </Row>
        </Section>
    )
}

export default Content_SaibaMais;