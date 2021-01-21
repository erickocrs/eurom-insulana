import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import ScrollMarker from '~/components/Scroll/ScrollMarker'
import {
BlueCircle,
Section,
Infos,
Texts,
Title,
Text,
Button,
ImageBox,
Image,
ImageSmaller
} from './Content_Produtos.styles'

import imageSrc from '~/assets/images/Produtos_1.png'
import imageSmallerSrc from '~/assets/images/Produtos_2.png'
import Row from '~/components/Row/Row'

export const Content_Produtos = () => {    

    const [animate, setAnimate] = React.useState(false);    

    const scrollReducer = useSelector((state) => state.scrollReducer);  

    React.useEffect(() => {
        
        if( scrollReducer.targetList[scrollReducer.currentTarget] &&
            scrollReducer.targetList[scrollReducer.currentTarget].markerName == "Produtos")
        {
            setAnimate(true);
        }
        
    }, [scrollReducer]);

    return(        
        <Section>
            <ScrollMarker absolute markerName="Produtos"/>
            <Row left>
                <Infos animate={animate}>
                    <Texts>
                        <BlueCircle animate={animate}/>
                        <Title animate={animate}>Produtos e equipamentos de última geração.</Title>
                        <Text animate={animate}>Para venda ao público ou para utilização na sua empresa.</Text>
                        <Button animate={animate}>Encontre o que procura</Button>       
                    </Texts>
                </Infos>
                <ImageBox>
                    <Image animate={animate} src={imageSrc}/>
                    <ImageSmaller animate={animate} src={imageSmallerSrc}/>
                </ImageBox>
            </Row>
        </Section>
    )
}

export default Content_Produtos;