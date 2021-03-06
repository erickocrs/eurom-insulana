import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";

import ScrollMarker from '~/components/Scroll/ScrollMarker'

import imageSrc_01 from '~/assets/images/clients/TAAG.png'
import imageSrc_02 from '~/assets/images/clients/SONANGOL.png'
import imageSrc_03 from '~/assets/images/clients/TEIXEIRA_DUARTE.png'
import imageSrc_04 from '~/assets/images/clients/BAI.png'
import imageSrc_05 from '~/assets/images/clients/INTER_OIL.png'
import imageSrc_06 from '~/assets/images/clients/GRIMALDI_LINES.png'
import imageSrc_07 from '~/assets/images/clients/CAIXA_TOTTA.png'
import imageSrc_08 from '~/assets/images/clients/MAXI.png'
import imageSrc_09 from '~/assets/images/clients/SIEMENS.png'
import imageSrc_10 from '~/assets/images/clients/REPSOL.png'
import imageSrc_11 from '~/assets/images/clients/BP.png'
import imageSrc_12 from '~/assets/images/clients/ENANGOLA.png'
import {
Section,
Infos,
Title,
Text,
Client,
ClientBox,
BlueCircle,
Button,
ClientList,
ClientLogo,
ScrollMarkerPosition } from './Content_Clientes.styles'

import Row from '~/components/Row/Row'
export const Content_Clientes = () => {

    const logos = [
        { title:"TAAG", image: imageSrc_01 },
        { title:"SONANGOL", image:imageSrc_02},
        { title:"TEIXEIRA DUARTE", image: imageSrc_03 },
        { title:"BAI", image: imageSrc_04 },
        { title:"INTER OIL", image: imageSrc_05 },
        { title:"GRIMALDI LINES", image: imageSrc_06 },
        { title:"CAIXA TOTTA", image: imageSrc_07 },
        { title:"MAXI", image: imageSrc_08 },
        { title:"SIEMENS", image: imageSrc_09 },
        { title:"REPSOL", image: imageSrc_10 },
        { title:"BP", image: imageSrc_11 },
        { title:"ENANGOLA", image: imageSrc_12 }
    ];

    const [animate, setAnimate] = React.useState(false);    

    const scrollReducer = useSelector((state) => state.scrollReducer);  

    React.useEffect(() => {

        if( scrollReducer.targetList[scrollReducer.currentTarget] &&
            scrollReducer.targetList[scrollReducer.currentTarget].markerName == "Clientes")
        {
            setAnimate(true);
        }
        
    }, [scrollReducer]);

    return(
        <Section>
            <ScrollMarkerPosition>
                <ScrollMarker markerName="Clientes"/>
            </ScrollMarkerPosition>
            <Row left>
                <Infos animate={animate}>
                    <BlueCircle animate={animate}/>
                    <Title >Os nossos clientes</Title>
                    <Text >Descubra quem confia na Insulana para garantir as melhores soluções <br/>de higienização.</Text>
                    <Button >Quer ser contatado?</Button>                    
                </Infos>
                <ClientList>
                    {logos.map((logo, i)=>{
                        return(                            
                            <Client key={i}>
                                {logo.title}
                                <ClientBox>
                                    <ClientLogo animate={animate} delay={i*100}
                                    alt={"Logo Cliente - " + logo.title}
                                    src={logo.image}/>
                                </ClientBox>
                            </Client>
                        )                        
                    })}
                </ClientList> 
            </Row>
        </Section>
    )
}

export default Content_Clientes;