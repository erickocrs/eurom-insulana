import styled from 'styled-components'
import Col from '~/components/Col/Col'

export const Section = styled.section`
    width:100%;
    padding:20px 0;
    margin-bottom:25.5%;
    z-index:0;

    transition:all 2000ms ease;
    
    @media (max-width:1024px){
        padding:0 0;
    }
`;

export const Infos = styled(Col)`
    flex-direction:column;

    width:${100/12*4+"%"};
    
    margin-top:19.7%;
    padding-left:4.2%;
    
    z-index:0;
    
    @media (max-width:1024px){
        margin-top:10%;
        min-height:100vh;
        padding-top:98px;
        box-sizing:border-box;
    }
    
    @media(max-width: 765px) {
        padding-top:70px;
    }
`;

export const Texts = styled.div`
    position:relative;
    width:auto;
`;

export const BlueCircle = styled.div`
    position:absolute;

    top:calc(76% - 553px);
    left:calc(58% - 550px);

    width:1120px;
    height:1075px;

    @media (max-width:1024px){
        top:-65%;
        left:-40%;

        width:160%;
        height:0;
        
        padding-bottom:155%;
    }

    background:#1A2CAD;
    border-radius:50%;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) scale(1) " :
    "translate(-50px,0) scale(.7) "};

    transition:all 2000ms ease;

    z-index:-1;
`;

export const Title = styled.h2`
    max-width:410px;
    margin-bottom:17px;

    font-size:36px;    
    font-weight:500;
    letter-spacing: -1.8px;
    color:#FFFFFF;    
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(200px,0) "};

    transition:all 2500ms ease;

    @media (max-width:1024px){
        max-width:300px;
        font-size:26px;    
        margin-bottom:12px;
    }
`;

export const Text = styled.h3`
    color:#FFFFFF;
    font-size:25px; 
    font-weight:normal;    
    letter-spacing: 0px;
    max-width:450px;    
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(275px,0) "};

    transition:all 2500ms ease;
    
    @media (max-width:1024px){
        max-width:300px;
        font-size:18px; 
    }
`;

export const Button = styled.a`
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
            "translate(0,0) scale(1) " :
            "translate(250px,0) scale(.8)  "};

    transition:all 2700ms ease;
        
    &:hover{
        opacity:.7;
        transition:all 100ms ease;
    }

    cursor: pointer;
    
    @media (max-width:1024px){
        width:250px;
        height:42px;
        font-size:14px;   

        margin:15px 0 0 0;
    }
`;

export const ImageBox = styled(Col)`
    position:relative;
    align-items:flex-end;
    width:${100/12*7+"%"};    
    margin-top:104px;
    z-index:1;
    
    @media (max-width:1024px){
        position:absolute;
        top:auto;
        left:auto;
        bottom:0;
        right:0;
        
        margin-top:0px;
    }
`;

export const Image = styled.img`
    max-width:100%;
    margin:0 0 0 60px;
    
    opacity:${props => props.animate ? "1" : "0.7"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(0,-50px) "};

    transition:all 3700ms ease;
    z-index:1;
    
    @media (max-width:1024px){
        max-width:80%;
        max-height:50vh;
    }
`;

export const ImageSmaller = styled.img`
    max-width:50%;
    
    margin:0 0 -4% -23%;
    opacity:${props => props.animate ? "1" : "0.7"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(0,150px) "};

    transition:all 3500ms ease;
    z-index:1;
    
    @media (max-width:1024px){
        max-width:35%;
        max-height:40vh;
    }
`;
