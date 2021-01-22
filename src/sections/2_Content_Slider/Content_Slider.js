import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Row from '~/components/Row/Row'
import ScrollMarker from '~/components/Scroll/ScrollMarker'
import {
Section,
Slider,
SliderList,
SliderCrop,
SliderCarrousel,
SlideRow,
Slide,
Infos,
ContainerImage,
ImageBox,
Image,
Title,
Text,
TextLink,
Button,
SliderPagination,
PaginationItem,
PaginationTitle,
ScrollMarkerPosition
} from './Content_Slider.styles.js'
import {
    CircleDesigns,
    BlueCircleDesign,
    WhiteCircleDesign,
    LineCircleDesign,
    CircleTextDesign
} from './Content_Slider_Circles.styles.js'
import imageLimpezaGerais from '~/assets/images/Limpezas_gerais.png'
import imageLimpezaEspecializada from '~/assets/images/Limpeza_especializada.png'
import imageServicoEntrega from '~/assets/images/Servico_entregas.png'
import imageAssistenciaTecnica from '~/assets/images/Assistencia_tecnica.png'

export const Content_Slider = () => {

    const scrollReducer = useSelector((state) => state.scrollReducer);  
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderList, setSliderList] = React.useState([        
        {
            image : imageLimpezaGerais,
            title : "LIMPEZA E HIGIENE GERAL",
            title : (<>LIMPEZA<br/> E HIGIENE GERAL</>),
            text : "A melhor limpeza e higienização está ao seu alcance, qualquer que seja a dimensão do seu negócio.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            alt : "Um homem limpando o chão.",
            on:true,
        },
        {
            image : imageLimpezaEspecializada,
            title : (<>LIMPEZA<br/> ESPECIALIZADA</>),
            text : "Há situações que pedem uma higienização ainda mais especializada dos espaços.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            alt : "Pessoa totalmente em roupa protegida higienizando o ambiente.",
            on:false,
        },
        {
            image : imageServicoEntrega,
            title : "Serviço de entregas",
            text : "O Serviço de Entregas Insulana garante que as suas encomendas chegam à sua empresa atempadamente.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            alt : "Um entregador sorridente empurrando algumas caixas.",
            on:false,
        },
        {
            image : imageAssistenciaTecnica,
            title : "Assistência técnica",
            text : "O nosso Serviço de Assistência Técnica garante a manutenção e reparação de todos os tipos de máquinas industrias.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            alt : "Um técnico sorridente.",
            on:false,
        }
    ]);

    const ifMaxCarousel = () => {
        return currentSlide + 2 > sliderList.length;
    }
    
    const nextSlide = () => {

        if(!ifMaxCarousel()){
            
            let newCurrentSlide = currentSlide + 1;
            setCurrentSlide(newCurrentSlide);
        }
    }

    const activeSlide = n => {

        let sliderListNew = sliderList.map((slide) => {
            slide.on = false;
            return slide;
        });

        sliderListNew[n].on = true;
        setSliderList(sliderListNew);
        setCurrentSlide(n);
    }

    React.useEffect(() => {

        if( scrollReducer.targetList[scrollReducer.currentTarget] &&
            scrollReducer.targetList[scrollReducer.currentTarget].markerName.indexOf("Slider-") >= 0)
        {
            let newSlide = scrollReducer.targetList[scrollReducer.currentTarget].markerName.replace('Slider-','');
            
            activeSlide(newSlide);
        }
        
    }, [scrollReducer]);
    
    return(
        
        <Section>
            <Row center>
                <Slider>
                    <SliderList>
                        <SliderCrop>
                            <SliderCarrousel currentSlide={currentSlide}>
                                {sliderList.map((slide, i) => {
                                    return (
                                        <Slide key={i} isActive={slide.on}>
                                            <ScrollMarkerPosition>
                                                <ScrollMarker absolute markerName={"Slider-" + i}/>                                                  
                                            </ScrollMarkerPosition>
                                            <SlideRow left>
                                                <ContainerImage i={i} isActive={slide.on}>
                                                    <ImageBox>
                                                        <CircleDesigns i={i}>
                                                            <BlueCircleDesign  isActive={slide.on}/>
                                                            <WhiteCircleDesign  isActive={slide.on}/>
                                                            <LineCircleDesign  isActive={slide.on}/>
                                                        </CircleDesigns>
                                                        <Image src={slide.image} alt={slide.alt}/>
                                                    </ImageBox>
                                                </ContainerImage>
                                                <Infos>
                                                    <CircleTextDesign  isActive={slide.on}/>
                                                    <Title  isActive={slide.on}>{slide.title}</Title>
                                                    <Text  isActive={slide.on}>{slide.text}</Text>
                                                    <TextLink  isActive={slide.on}>{slide.linkText}</TextLink>
                                                    <Button  isActive={slide.on}>{slide.buttonText}</Button>
                                                </Infos>    
                                            </SlideRow>
                                        </Slide>       
                                        
                                    )
                                })}
                                
                            </SliderCarrousel>
                            <SliderPagination>
                                {sliderList.map((slide, i) => {
                                    return (
                                        <PaginationItem key={i} isActive={slide.on}>
                                            <PaginationTitle isActive={slide.on}>{slide.title}</PaginationTitle>
                                        </PaginationItem>
                                    )
                                })}
                            </SliderPagination>
                        </SliderCrop>
                    </SliderList>
                </Slider>
            </Row>
        </Section>
    )
}

export default Content_Slider;