import styled from 'styled-components'
import Col from '~/components/Col/Col'

export const Section = styled.section`
    width:100%;
    padding:250px 20px;
    overflow:hidden;
`

export const Slider = styled.div`
    width:100%;
`   

export const SliderList = styled.div`
    width:100%;
`
export const SliderCrop = styled.div`
    
    width:100%;
    height:750px;
`

export const SliderCarrousel = styled.div`
    float: left;
    width:100%;
    height:100%;
    transform:${props => `translate(0,-${props.currentSlide * 900}px)`};

    transition:all 1500ms ease;
`

export const Slide = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:center;

    width:100%;
    margin-bottom:200px;

    opacity:${props => props.on ? "1" : "0"};  
    transition:all 500ms ease;
`

export const Infos = styled(Col)`
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;

    width:${100/12*5+"%"};
    margin:156px 0 0 0;
    padding-left:87px;
`

export const ContainerImage = styled(Col)`
    justify-content:flex-end;
    width:${100/12*7+"%"};

    z-index:0;

    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,100px) rotateX(30deg) rotateY(10deg) "};

    transition:all 1500ms ease;
`

export const Image = styled.img`
    display:block;
    margin-right:15px;
    
`

export const BlueCircleDesign = styled.div`
    position:absolute;
    top:calc(50% - 306px - 25px);
    left:calc(50% - 306px + 83px);
    width:612px;
    height:612px;
    background:#183BB3;
    opacity:.93;
    
    border-radius:50%;
    z-index:-1;
    
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(30deg) "};

    transition:all 2150ms ease;
`

export const WhiteCircleDesign = styled.div`
    position:absolute;
    top: calc(50% - 306px - 34px);
    left: calc(50% - 306px + 202px);
    width:612px;
    height:612px;
    background: transparent linear-gradient(321deg, #FFFFFF 0%, #CEDFF1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 3px 13px 21px #0000000F;
    opacity:.93;

    border-radius:50%;
    z-index:-1;
    
    
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(10deg) "};

    transition:all 2150ms ease;
`

export const LineCircleDesign = styled.div`
    position:absolute;
    top: calc(50% - 287px - 103px);
    left: calc(50% - 287px + 205px);
    width: 595px;
    height: 596px;
    
    box-shadow: 1px 0px 1px 0px #2e3d6d;

    border-radius:50%;

    z-index:-1;
     
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(-30deg) "};

    transition:all 2150ms ease;
`   

export const Title = styled.div`    
    margin-top:0px;
    margin-bottom:10px;

    font-size:36px;
    font-weight:bold;
    letter-spacing: -1.44px;
    text-transform: uppercase;
    color:#1A2CAD;

    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0)" :
    "translate(-100px,0)"};

    transition:all 2200ms ease;
`
export const Text = styled.div`
    max-width:450px;
    margin:0 0 20px 0;

    font-size:25px;
    letter-spacing: 0px;
    font-weight:normal;
    color: #313F45;
    
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0)" :
    "translate(-110px,0)"};

    transition:all 2200ms ease 200ms;

`
export const TextLink = styled.div`
    margin:0 0 20px 0;

    font-size:18px;
    font-weight:bold;
    letter-spacing: 0px;
    text-decoration:underline;
    color: #1A2CAD;
    
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ? 
    "translate(0,0)" :
    "translate(-70px,0)"};

    transition:all 2200ms ease 400ms;
`

export const Button = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;    
    justify-content:center;

    width: 295px;
    height: 52px;
    line-height:52px;
    margin:23px 0 0 0;

    box-shadow: 4px 4px 13px #00000041;
    border-radius: 17px;
    background:#1A2CAD;

    text-align:center;
    font-size:17px;
    font-weight:bold;
    letter-spacing: 0.3px;
    color: #FFFFFF;

    font-size:16px;
    font-family:'Montserrat';
    letter-spacing:0px;
    font-weight: 500;
    
    opacity:${props => props.on && props.animate ? "1" : "0"};  
    transform: ${props => props.on && props.animate ?     
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(-100px,0) rotateX(30deg) rotateY(15deg) "};

    transition:all 1500ms ease 600ms;

    &:hover{
        opacity:.9;
        transition:all 100ms ease;
    }

    cursor: pointer;
`
