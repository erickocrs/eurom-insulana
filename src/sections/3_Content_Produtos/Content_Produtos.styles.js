import styled from 'styled-components'
import Col from '~/components/Col/Col'

export const Section = styled.section`
    width:100%;
    padding:20px 0;
    margin-bottom:25.5%;
    z-index:0;

    background:${props => props.animate ? "red" : ""};
    transition:all 2000ms ease;
`;

export const Infos = styled(Col)`
    flex-direction:column;

    width:${100/12*4+"%"};
    
    margin-top:19.7%;
    padding-left:4.2%;
    
    z-index:0;
`;

export const BlueCircle = styled.div`
    position:absolute;

    top:calc(76% - 553px);
    left:calc(58% - 550px);

    width:1120px;
    height:1075px;

    background:#1A2CAD;
    border-radius:50%;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) rotateX(0deg) rotateY(0deg) " :
    "translate(-50px,0) rotateX(-50deg) rotateY(-15deg) "};

    transition:all 2000ms ease;

    z-index:-1;
`;

export const Title = styled.div`
    max-width:410px;
    margin-bottom:17px;

    font-size:36px;    
    font-weight:500;
    letter-spacing: -1.8px;
    color:#FFFFFF;    
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(200px,0)"};

    transition:all 2500ms ease;

`;

export const Text = styled.div`
    color:#FFFFFF;
    font-size:25px; 
    font-weight:normal;    
    letter-spacing: 0px;
    max-width:450px;
    
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(275px,0)"};

    transition:all 2500ms ease;
`;

export const Button = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    width:324px;
    height:52px;   

    margin:42px 0 0 0;
        
    background:#ffffff;
    box-shadow: 4px 4px 13px #0000001A;
    border-radius: 17px;

    font-size:19px;
    font-weight:bold;
    color:#1A2CAD;
        
    font-size:19px;
    font-family:'Montserrat';
    letter-spacing:0px;
    font-weight: 600;
    
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(250px,0) rotateX(30deg) rotateY(15deg) "};

    transition:all 2700ms ease;
        
    &:hover{
        opacity:.7;
        transition:all 100ms ease;
    }

    cursor: pointer;
`;

export const ImageBox = styled(Col)`
    position:relative;
    align-items:flex-end;
    width:${100/12*7+"%"};    
    margin-top:104px;
    
`;

export const Image = styled.img`
    margin:0 0 0 60px;
    
    opacity:${props => props.animate ? "1" : "0.7"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(0,-50px)"};

    transition:all 3700ms ease;
`;

export const ImageSmaller = styled.img`
    margin:0 0 -4% -23%;
    opacity:${props => props.animate ? "1" : "0.7"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(0,150px)"};

    transition:all 3500ms ease;
`;
