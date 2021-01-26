import styled from 'styled-components'
import Col from '~/components/Col/Col'
import RowComponent from '~/components/Row/Row'

export const Section = styled.section`
    position:relative;

    width:100%;

    padding:250px 20px;

    overflow:hidden;
    box-sizing:border-box;

    @media(max-width: 1024px) {
        min-height:100vh;
        min-height: -webkit-fill-available;
        padding:98px 20px 0;        
    }
    
    @media(max-width: 765px) {
        padding-top:70px;
    }
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
    
    @media(max-width: 1024px) {
        padding-top:98px;
        height:100vh;    
        box-sizing:border-box;
    }
    
    @media(max-width: 765px) {
        padding-top:70px;
    }
`

export const SlideRow = styled(RowComponent)`
    
    position:relative;
    @media(max-width: 1024px) {
        height:100%;
        justify-content:flex-start;
    }
`;

export const SliderCarrousel = styled.div`
    position:relative;

    width:100%;
    height:100%;
    transition:all 1500ms ease;
`

export const Slide = styled.div`
    position:absolute;
    top:0;left:0;

    width:100%;
    height:100%;

    display:flex;
    flex-direction:row;
    align-items:flex-start;
    justify-content:center;

    opacity:0;
    z-index:-2;
    visibility:hidden;      
    
    transition:all 500ms ease;

    ${props => props.isActive && `
        opacity:1;
        z-index:1;
        visibility:visible;
    `};      
    
    @media(max-width: 1024px) {
        align-items:center;
    }
`

export const Infos = styled(Col)`
    position:relative;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;

    width:${100/12*5+"%"};
    margin:156px 0 0 0;
    padding:0 0 0 87px;

    z-index:1;
    
    
    @media(max-width: 1024px) {

        margin:0px 0 0 0;
        padding:80px 00px 0 150px;
        
        align-items:flex-end;
        justify-content:flex-start;

        text-align:right;
    }
    
    @media(max-width: 700px) {
        width:100%;
        padding:20px 00px 0 50px;
    }
    @media(max-width: 400px) {
        padding:20px 00px 0 20px;
    }
`

export const ContainerImage = styled(Col)`
    
    justify-content:flex-end;
    width:${100/12*7+"%"};

    opacity:0;  
    ${props => props.isActive && `
        opacity:1;  
    `};
    
    transform:translate(0,20%) scale(0.85) ;
    ${props => props.isActive && `
        transform:translate(0,0) scale(1) ;
    `};

    transition:all 1500ms ease;
        
    @media(max-width: 1024px) {
        position:absolute;
        top:auto;
        bottom:0px;
        left:-150px;
        justify-content:flex-start;
        
            
        ${props => props.i == 2 && `
            left:-250px;
        `};
    }
`

export const Image = styled.img`

    max-height:85vh;
    @media(max-width: 1024px) {
        max-width:100%;
        max-height:85vh;
    }

    
`

export const ImageBox = styled.div`
    
    width:auto;
    max-width:100%;
    margin-right:15px;

`;

export const Title = styled.h2`    
    margin-top:0px;
    margin-bottom:10px;

    font-size:36px;
    font-weight:bold;
    letter-spacing: -1.44px;
    text-transform: uppercase;
    color:#1A2CAD;

    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ? 
    "translate(0,0) " :
    "translate(-100px,0) "};

    transition:all 2200ms ease;
    
    @media(max-width: 1024px) {
        font-size:26px;
    }
`

export const Text = styled.h3`

    max-width:450px;

    margin:0 0 20px 0;

    font-size:25px;
    letter-spacing: 0px;
    font-weight:normal;

    color: #313F45;
    
    opacity:${props => props.isActive ? "1" : "0"};  

    transform: ${props => props.isActive ? 
    "translate(0,0) " :
    "translate(-110px,0) "};

    transition:all 2200ms ease 200ms;

    @media(max-width: 1024px) {
        max-width:250px;

        margin:0 0 10px 0;

        font-size:20px;    
    }
    @media(max-width: 400px) {
        max-width:225px;
        font-size:16px;   
    }
`

export const TextLink = styled.a`

    margin:0 0 20px 0;

    font-size:18px;
    font-weight:bold;
    letter-spacing: 0px;
    text-decoration:underline;

    color: #1A2CAD;
    
    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ? 
    "translate(0,0) " :
    "translate(-70px,0) "};

    transition:all 2200ms ease 400ms;
    
    @media(max-width: 1024px) {
        margin:0 0 5px 0;
    }
`

export const Button = styled.a`
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
    
    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ?     
    "translate(0,0) scale(1) " :
    "translate(-100px,0) scale(.7) "};

    transition:all 1500ms ease 600ms;

    &:hover{
        opacity:.9;
        transition:all 100ms ease;
    }

    cursor: pointer;
    
    @media(max-width: 1024px) {
        width: 210px;
        height: 42px;

        margin:10px 0 0 0;
            
        font-size:14px;

        transform: ${props => props.isActive ?     
        "translate(0,0) " :
        "translate(30px,0) "};

    }
`
export const SliderPagination = styled.div`
    position:absolute;
    top:50%;
    left:auto;
    right:0px;
    width:auto;

    transform:translate(0,-50%);

    z-index:2;

    @media(max-width: 1024px) {

    }
`;

export const PaginationItem = styled.div`
    position:relative;
    width: 12px;
    height: 12px;

    background:${props => props.isActive ? "#1A2CAD" : "#00000012"};
    border: 1px solid #1A2CAD42;

    transition:all 100ms ease;

    border-radius:50%;
    margin-bottom:20px;
`

export const PaginationTitle = styled.span`
    position:absolute;
    display:inline;
    top:-3px;
    left:auto;
    right:100%;
    margin-right:10px;
    font-size:14px;
    font-weight:bold;
    letter-spacing: -1.44px;
    text-transform: uppercase;
    color:#1A2CAD;

    opacity:${props => props.isActive ? "1" : "0.3"};
    
    transition:all 100ms ease;

    white-space:nowrap;

    & br{
        display:none;
        
    }
    
    @media(max-width: 1750px) {
        display:none;
    }
`

export const ScrollMarkerPosition = styled.div`
    position:absolute;
    display:block;

    width:100%;
    height:auto;

    top:-180px;
    left:0;
    
    @media(max-width: 1700px) {
        top:-105px;
    }
    @media(max-width: 1024px) {
        top:-98px;
    }
        
    @media (max-width:765px){
        top:-70px;
    }
`;