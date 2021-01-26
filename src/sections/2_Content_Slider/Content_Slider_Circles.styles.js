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
    left:auto;
    right:0;

    ${props => props.i == 2 && `
        top:51%;
        right:1%;
    `};
    
    ${props => props.i == 3 && `
        top:54%;
        right:0%;
    `};

    transform:translate(0,-50%);

    z-index:-2;
    
    @media(max-width: 1024px) {

        transform:translate(5%,-37%);
    }
`;

export const BlueCircleDesign = styled.div`
    position:absolute;
    top:7%;
    left:-10%;
    width:98.55%;
    height:0;
    padding-bottom:98.55%;
    background:#183BB3;
    opacity:.93;
    
    border-radius:50%;
    z-index:-2;
    
    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(30deg) "};

    @media(max-width: 1024px) {
        transform: ${props => props.isActive ? 
        "translate(-5%,-15%)" :
        "translate(0,0)" }
    }

    transition:all 2150ms ease;
`

export const WhiteCircleDesign = styled.div`
    position:absolute;
    top:7.5%;
    left:6%;
    width:98.55%;
    height:0;
    padding-bottom:98.55%;
    background: transparent linear-gradient(321deg, #FFFFFF 0%, #CEDFF1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 3px 13px 21px #0000000F;
    opacity:.93;

    border-radius:50%;
    z-index:-2;
    
    
    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(10deg) "};

    @media(max-width: 1024px) {
        transform: ${props => props.isActive ? 
        "translate(-5%,-15%)" :
        "translate(0,0)" }
    }

    transition:all 2150ms ease;
`

export const LineCircleDesign = styled.div`
    position:absolute;
    top:-1%;
    left:9.5%;
    width: 95.81%;
    height:0;
    padding-bottom:95.95%;
    
    box-shadow: 1px 0px 1px 0px #2e3d6d;

    border-radius:50%;

    z-index:-2;
     
    opacity:${props => props.isActive ? "1" : "0"};  
    transform: ${props => props.isActive ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(-30deg) "};
  
    @media(max-width: 1024px) {
        transform: ${props => props.isActive ? 
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

    ${props => props.isActive && `
        opacity:.3;
        transform:translate(-50%,-50%) scale(1);
    `};

    @media(max-width: 500px) {
        display:block;
    }
`
