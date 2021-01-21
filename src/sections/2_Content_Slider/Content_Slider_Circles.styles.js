import styled from 'styled-components'
import Col from '~/components/Col/Col'
import RowComponent from '~/components/Row/Row'

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

    z-index:-2;
    
`;

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
    z-index:-2;
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(30deg) "};

    @media(max-width: 1024px) {
        transform: ${props => props.on ? 
        "translate(-5%,-15%)" :
        "translate(0,0)" }
    }

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
    z-index:-2;
    
    
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(10deg) "};

    @media(max-width: 1024px) {
        transform: ${props => props.on ? 
        "translate(-5%,-15%)" :
        "translate(0,0)" }
    }

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

    z-index:-2;
     
    opacity:${props => props.on ? "1" : "0"};  
    transform: ${props => props.on ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(-30deg) "};
  
    @media(max-width: 1024px) {
        transform: ${props => props.on ? 
        "translate(-5%,-15%)" :
        "translate(0,0)" }
    }

    transition:all 2150ms ease;
`   

export const CircleTextDesign = styled.div`
    position:absolute;
    display:none;
    top:36%;
    left:auto;
    right:-110%;
    width:130.55%;
    height:0;
    padding-bottom:125%;
    background: transparent linear-gradient(321deg, #FFFFFF 0%, #CEDFF1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 3px 13px 21px #0000000F;
    opacity:0;

    border-radius:50%;
    z-index:-1;

    transform:translate(-50%,-50%) scale(0.5);
    transition:all 0ms ease;

    ${props => props.on && `
        opacity:.3;
        transform:translate(-50%,-50%) scale(1);
    `};

    @media(max-width: 500px) {
        display:block;
    }
`
