import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ScrollMarker from '~/components/Scroll/ScrollMarker'
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
Row,
BlueCircleDesign,
WhiteCircleDesign,
LineCircleDesign,
ScrollMarkerPosition
} from './Content_SaibaMais.styles'
import imageSrc from '~/assets/images/Quem_somos.png'

export const Content_SaibaMais = () => {
    
    const [animate, setAnimate] = React.useState(false);    

    const scrollReducer = useSelector((state) => state.scrollReducer);  

    React.useEffect(() => {

        if( scrollReducer.targetList[scrollReducer.currentTarget] &&
            scrollReducer.targetList[scrollReducer.currentTarget].markerName == "SaibaMais")
        {
            setAnimate(true);
        }
        
    }, [scrollReducer]);
    
    return(
        
        <Section>
            <ScrollMarkerPosition>
                <ScrollMarker absolute markerName="SaibaMais"/>
            </ScrollMarkerPosition>
            <Row left>
                <ImageBox>
                    <ImageContainer animate={animate}>
                        <Image  src={imageSrc} alt="Mulher sorridente trabalhando."/>
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