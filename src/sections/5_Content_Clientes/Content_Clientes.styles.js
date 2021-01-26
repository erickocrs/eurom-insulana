import styled from 'styled-components'

export const Section = styled.section`
    padding:390px 0 250px;
`;

export const Infos = styled.div`
    position:relative;
    width:${100/12*4+"%"};
    margin-left:${100/12*1+"%"};
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(-200px,0) "};

    transition:all 1500ms ease;
    
    @media (max-width:1024px){
        width:100%;
        margin-left:10px;
    }
`;

export const BlueCircle = styled.div`
    position:absolute;

    top: calc(50% - 400px + 60px);
    left: calc(50% - 400px + -233px);

    width: 884px;
    height: 831px;

    background:#1A2CAD;
    border-radius:50%;

    z-index:-1;
    
    opacity:1;

    
    @media (max-width:1024px){
        top:-270px;
        left:-130px;

        width:500px;
        height: 500px;
    }
`;

export const Title = styled.h2`
    font-size:36px;
    font-weight:700;
    letter-spacing: -1.8px;
    color:#ffffff;
    margin-bottom:20px;

    opacity:1;
    
    @media (max-width:1024px){
        font-size:24px;
        margin-bottom:5px;
    }
`;

export const Text = styled.h3`
    max-width:450px;

    font-size:25px;
    font-weight:400;
    letter-spacing: 0px;
    color:#ffffff;

    margin:0 0 20px 0;
    opacity:1;
    
    @media (max-width:1024px){
        font-size:18px;
        margin-bottom:5px;
        max-width:320px;
    }
`;

export const Button = styled.a`    
    display:flex;    
    align-items:center;
    justify-content:center;

    width: 277px;
    height: 52px;

    margin:42px 0 0 0;

    font-size:20px;
    font-family:'Montserrat';
    font-weight: 600;
    letter-spacing: 0px;
    color:#2A3AB2;
    text-align:center;


    background:#ffffff;
    border-radius: 17px;
    box-shadow: 4px 4px 13px #0000001A;
    
    opacity:1;
    
    &:hover{
        opacity:.7;
        transition:all 100ms ease;
    }

    cursor: pointer;
    
    @media (max-width:1024px){

        width: 240px;
        height: 42px;
        font-size:16px;
        margin:15px 0 0 0;
            
    }
        
`;

export const Client = styled.h3`
    font-size:0;
    color:transparent;
`;


export const ClientList = styled.div`
    width:100%;
    max-width:605px;
    margin-left:${100/12*1+"%"};
    
    @media (max-width:1024px){
        margin-top:20%;
        margin-left:0;
        max-width:100%;
    }
    
    @media (max-width:700px){
        max-width:100%;
    }
`;

export const ClientBox = styled.div`
    display:flex; 
    float:left;
    align-items:center;
    justify-content:center;
    width:calc(100%/3); 
    height:100px;
    margin-bottom:51px;
    
    @media (max-width:1024px){
        width:calc(100%/4); 
        height:50px;
        margin-bottom:5px;
    }
`;

export const ClientLogo = styled.img`   
    width:auto;
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ?      
    "translate(0,0)" :
    "translate(300%,0)"};

    transition:${props => props.delay ? "all 2500ms ease " + props.delay + "ms" : "2500ms 0ms"};
    
    @media (max-width:1024px){
        max-width:100%;
    }
`;

export const ScrollMarkerPosition = styled.div`
    position:absolute;
    display:block;

    width:100%;
    height:auto;

    top:170px;
    left:0;
    @media (max-width:1024px){
        top:270px;
    }
`;