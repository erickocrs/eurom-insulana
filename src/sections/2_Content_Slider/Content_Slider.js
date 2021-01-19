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
LineCircleDesign,
SliderPagination,
PaginationItem,
PaginationTitle,
ScrollMarkerPosition
} from './Content_Slider.styles.js'
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
            text : "A melhor limpeza e higienização está ao seu alcance, qualquer que seja a dimensão do seu negócio.",
            linkText : "Saiba mais",
            buttonText : "Peça-nos um orçamento",
            on:true,
        },
        {
            image : imageLimpezaEspecializada,
            title : (<>LIMPEZA<br/> ESPECIALIZADA</>),
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
            
            console.log("newSlide",newSlide);
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
                                        <Slide on={slide.on}>
                                            <ScrollMarkerPosition>
                                                <ScrollMarker absolute markerName={"Slider-" + i}/>                                                  
                                            </ScrollMarkerPosition>
                                            <ContainerImage  on={slide.on}>
                                                <Image src={slide.image}/>
                                                <BlueCircleDesign  on={slide.on}/>
                                                <WhiteCircleDesign  on={slide.on}/>
                                                <LineCircleDesign  on={slide.on}/>
                                            </ContainerImage>
                                            <Infos>
                                                <Title  on={slide.on}>{slide.title}</Title>
                                                <Text  on={slide.on}>{slide.text}</Text>
                                                <TextLink  on={slide.on}>{slide.linkText}</TextLink>
                                                <Button  on={slide.on}>{slide.buttonText}</Button>
                                            </Infos>    
                                        </Slide>       
                                        
                                    )
                                })}
                                
                            </SliderCarrousel>
                            <SliderPagination>
                                {sliderList.map((slide, i) => {
                                    return (
                                        <PaginationItem on={slide.on}>
                                            <PaginationTitle on={slide.on}>{slide.title}</PaginationTitle>
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