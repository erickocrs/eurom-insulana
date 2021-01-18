import React from 'react'
import styled from 'styled-components'

import imageSrc_01 from '~/assets/images/TAAG.png'
import imageSrc_02 from '~/assets/images/SONANGOL.png'
import imageSrc_03 from '~/assets/images/TEIXEIRA_DUARTE.png'
import imageSrc_04 from '~/assets/images/BAI.png'
import imageSrc_05 from '~/assets/images/INTER_OIL.png'
import imageSrc_06 from '~/assets/images/GRIMALDI_LINES.png'
import imageSrc_07 from '~/assets/images/CAIXA_TOTTA.png'
import imageSrc_08 from '~/assets/images/MAXI.png'
import imageSrc_09 from '~/assets/images/SIEMENS.png'
import imageSrc_10 from '~/assets/images/REPSOL.png'
import imageSrc_11 from '~/assets/images/BP.png'
import imageSrc_12 from '~/assets/images/ENANGOLA.png'
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
ClientLogo } from './Content_Clientes.styles'

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
        if(!animate && scrollTop + 500 > SectionEl.current.offsetTop) {
            setAnimate(true);
            window.removeEventListener("scroll", onScroll);
        }
    }, [scrollTop]);

    return(
        <Section ref={SectionEl}>
            <Row left>
                <Infos>
                    <BlueCircle animate={animate}/>
                    <Title animate={animate}>Os nossos clientes</Title>
                    <Text animate={animate}>Descubra quem confia na Insulana para garantir as melhores soluções <br/>de higienização.</Text>
                    <Button animate={animate}>Quer ser contatado?</Button>                    
                </Infos>
                <ClientList>
                    {logos.map((logo, i)=>{
                        return(                            
                            <Client>
                                <ClientBox>
                                    <ClientLogo animate={animate} delay={i*100}
                                    alt={logo.title}
                                    src={logo.image}/>
                                    {logo.title}
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