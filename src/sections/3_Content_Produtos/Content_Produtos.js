import React from 'react'
import {
BlueCircle,
Section,
Infos,
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
        if(!animate && scrollTop + 900 > SectionEl.current.offsetTop) {
            setAnimate(true);
            window.removeEventListener("scroll", onScroll);
        }
    }, [scrollTop]);

    return(
        <Section ref={SectionEl}>
            <Row left>
                <Infos animate={animate}>
                    <BlueCircle animate={animate}/>
                    <Title animate={animate}>Produtos e equipamentos de última geração.</Title>
                    <Text animate={animate}>Para venda ao público ou para utilização na sua empresa.</Text>
                    <Button animate={animate}>Encontre o que procura</Button>       
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