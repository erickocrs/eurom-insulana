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
      
    ${props => props.on && `
        opacity:1;
        z-index:1;
        visibility:visible;
    `};  
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

    opacity:0;  
    ${props => props.on && `
        opacity:1;  
    `};
    
    transform:translate(0,100px) rotateX(30deg) rotateY(10deg);
    ${props => props.on && `
        transform:translate(0,0) rotateX(00deg) rotateY(00deg);
    `};

    transition:all 1500ms ease;
        
    @media(max-width: 1024px) {
        position:absolute;
        top:-10%;
        left:-40%;
    }
`

export const ImageBox = styled.div`
    position:relative;
    width:auto;
    max-width:100%;
    margin-right:15px;
    
    z-index:0;
`;

export const CircleDesigns = styled.div`
    position:absolute;
    display:block;
    width:100%;
    height:100%;
    max-width:621px;

    top:50%;
    left:50%;

    ${props => props.i == 2 && `
        left:54%;
    `};

    transform:translate(-50%,-50%);

    z-index:-1;
`;


export const Image = styled.img`

    @media(max-width: 1024px) {
        max-width:400px;
    }
    
`

export const BlueCircleDesign = styled.div`
    position:absolute;
    top:9%;
    left:-8%;
    width:98.55%;
    height:0;
    padding-bottom:98.55%;
    background:#183BB3;
    opacity:.93;
    
    border-radius:50%;
    z-index:-1;
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(30deg) "};

    transition:all 2150ms ease;
`

export const WhiteCircleDesign = styled.div`
    position:absolute;
    top:9%;
    left:12%;
    width:98.55%;
    height:0;
    padding-bottom:98.55%;
    background: transparent linear-gradient(321deg, #FFFFFF 0%, #CEDFF1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 3px 13px 21px #0000000F;
    opacity:.93;

    border-radius:50%;
    z-index:-1;
    
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(10deg) "};

    transition:all 2150ms ease;
`

export const LineCircleDesign = styled.div`
    position:absolute;
    top:0;
    left:14%;
    width: 95.81%;
    height:0;
    padding-bottom:95.95%;
    
    box-shadow: 1px 0px 1px 0px #2e3d6d;

    border-radius:50%;

    z-index:-1;
     
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
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

    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
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
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
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
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
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
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ?     
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(-100px,0) rotateX(30deg) rotateY(15deg) "};

    transition:all 1500ms ease 600ms;

    &:hover{
        opacity:.9;
        transition:all 100ms ease;
    }

    cursor: pointer;
`
export const SliderPagination = styled.div`
    position:absolute;
    top:50%;
    left:auto;
    right:0px;
    width:auto;

    transform:translate(0,-50%);

`;

export const PaginationItem = styled.div`
    position:relative;
    width: 12px;
    height: 12px;

    background:${props => props.on ? "#1A2CAD" : "#00000012"};
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

    opacity:${props => props.on ? "1" : "0.3"};
    
    transition:all 100ms ease;

    white-space:nowrap;

    & br{
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
`;