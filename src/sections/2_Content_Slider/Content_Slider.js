import React from 'react'
import Row from '~/components/Row/Row'
import {
Section,
Slider,
SliderList,
SliderCrop,
SliderCarrousel,
Slide,
Infos,
ContainerImage,
Image,
Title,
Text,
TextLink,
Button,
BlueCircleDesign,
WhiteCircleDesign,
LineCircleDesign
} from './Content_Slider.styles.js'
import imageLimpezaGerais from '~/assets/images/Limpezas_gerais.png'
import imageLimpezaEspecializada from '~/assets/images/Limpeza_especializada.png'
import imageServicoEntrega from '~/assets/images/Servico_entregas.png'
import imageAssistenciaTecnica from '~/assets/images/Assistencia_tecnica.png'

export const Content_Slider = () => {

    const [sliderList, setSliderList] = React.useState([        
        {
            image : imageLimpezaGerais,
            title : "LIMPEZA E HIGIENE GERAL",
            text : "A melhor limpeza e higienização está ao seu alcance, qualquer que seja a dimensão do seu negócio.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            on:true,
        },
        {
            image : imageLimpezaEspecializada,
            title : (<>LIMPEZA<br/>ESPECIALIZADA</>),
            text : "Há situações que pedem uma higienização ainda mais especializada dos espaços.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            on:false,
        },
        {
            image : imageServicoEntrega,
            title : "Serviço de entregas",
            text : "O Serviço de Entregas Insulana garante que as suas encomendas chegam à sua empresa atempadamente.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            on:false,
        },
        {
            image : imageAssistenciaTecnica,
            title : "Assistência técnica",
            text : "O nosso Serviço de Assistência Técnica garante a manutenção e reparação de todos os tipos de máquinas industrias.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            on:false,
        }
    ]);

    const SectionEl = React.useRef(null);

    const [scrolling, setScrolling] = React.useState(false);
    const [scrollTop, setScrollTop] = React.useState(0);
    const [animate, setAnimate] = React.useState(false);   
    const [currentSlide, setCurrentSlide] = React.useState(0);
      
    const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };

    const ifMaxCarousel = () => {
        return currentSlide + 2 > sliderList.length;
    }
    
    const nextSlide = () => {
        console.log("next")
        if(!ifMaxCarousel()){
            console.log("pas")
            let newCurrentSlide = currentSlide + 1;
            setCurrentSlide(newCurrentSlide);
        }
    }

    React.useEffect(() => {
        let sliderListNew = sliderList.map((slide) => {
            slide.on = false;
            return slide;
        });
        sliderListNew[currentSlide].on = true;
        setSliderList(sliderListNew);
    }, [currentSlide])

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
        <Section ref={SectionEl} onClick={() => nextSlide()}>
            <Row center>
                <Slider>
                    <SliderList>
                        <SliderCrop>
                            <SliderCarrousel currentSlide={currentSlide}>
                                {sliderList.map((slide, i) => {
                                    return (
                                        <Slide on={slide.on}>
                                            <ContainerImage animate={animate} on={slide.on}>
                                                <Image src={slide.image}/>
                                                <BlueCircleDesign animate={animate} on={slide.on}/>
                                                <WhiteCircleDesign animate={animate} on={slide.on}/>
                                                <LineCircleDesign animate={animate} on={slide.on}/>
                                            </ContainerImage>
                                            <Infos>
                                                <Title animate={animate} on={slide.on}>{slide.title}</Title>
                                                <Text animate={animate} on={slide.on}>{slide.text}</Text>
                                                <TextLink animate={animate} on={slide.on}>{slide.linkText}</TextLink>
                                                <Button animate={animate} on={slide.on}>{slide.buttonText}</Button>
                                            </Infos>
                                        </Slide>
                                    )
                                })}
                            </SliderCarrousel>
                        </SliderCrop>
                    </SliderList>
                </Slider>
            </Row>
        </Section>
    )
}

export default Content_Slider;