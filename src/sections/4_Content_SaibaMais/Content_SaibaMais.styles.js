import styled from 'styled-components'
import RowC from '~/components/Row/Row'

export const Section = styled.section`
    padding:0 0 250px;
`;

export const Row = styled(RowC)`
`;

export const Infos = styled.div`
    position:relative;
    margin-top:16%;
    padding-left:9%;
    width:${100/12*5+"%"};
    
    @media (max-width:1024px){
        margin-top:-0%;
        padding:0 5% 0;
        width:100%;


        display:flex;
        flex-direction:column;
        align-items:flex-end;

        text-align:right;

        box-sizing:border-box;
    }
`;

export const BlueCircle = styled.div`
    position:absolute;

    top: calc(50% - 550px - 41px);
    left: calc(50% - 550px - 57px);
    
    width: 1248px;
    height: 1182px;

    background:#1A2CAD;
    border-radius:50%;

    z-index:-1;

    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) scale(1) " :
    "translate(250px,0) scale(1.1) "};

    @media (max-width:1024px){       
        
        transform: ${props => props.animate ? 
        "translate(0,0) scale(1) " :
        "translate(250px,0) scale(1.1) "};
    }
    
    transition:all 2200ms ease;
    
    @media (max-width:1024px){
        top:-170px;
        left:auto;
        right:-150px;
        
        width: 600px;
        height: 600px;
    }

    @media (max-width:500px){
        top: -80%;
        left: -10%;
        
        width: 150%;
        height: 0;
        padding-bottom:150%;
    }
    
`;


export const Title = styled.h2`
    margin-bottom:18px;

    font-size:36px;
    font-weight:500;
    letter-spacing: -1.8px;
    color:#ffffff;     
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(-200px,0) "};

    transition:all 2000ms ease;
    
    @media (max-width:1024px){
        margin-bottom:5px;

        font-size:26px;
        max-width:200px;
    }
`;

export const Text = styled.h3`
    max-width:400px;
    margin-bottom:20px;

    font-size:25px;
    font-weight:400;
    letter-spacing: 0;
    color:#ffffff;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) " :
    "translate(-275px,0) "};

    transition:all 2100ms ease;
    
    @media (max-width:1024px){   

        font-size:18px;

        margin-bottom:5px;

        max-width:300px;
    }
`;

export const Button = styled.a`
    margin-top:43px;

    display:flex;   
    align-items:center;
    justify-content:center;    

    width:255px;
    height:52px;

    font-size:19px;
    font-weight:600;
    font-family:'Montserrat';
    color:#2A3AB2;
    text-align:center;
    letter-spacing:0px;        

    background:#ffffff;    
    border-radius: 17px;
    box-shadow: 4px 4px 13px #0000001A;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ?      
        "translate(0,0) scale(1) " :
        "translate(-250px,0) scale(.9) "};    

    transition:all 2150ms ease;
    
    &:hover{
        opacity:.7;
        transition:all 100ms ease;
    }

    cursor: pointer;
    @media (max-width:1024px){   
        width:190px;
        height:42px;
        font-size:16px;
        margin-top:10px;     
    }
`;

export const ImageContainer = styled.div`
    position:relative;
    float:left; 

    width:auto;
    height:auto;
    z-index:0;
    
    opacity:${props => props.animate ? "1" : "0"};  
    opacity:1;
    transform:${props => props.animate ? "scale(1)" : "scale(.9)"};  
    transition:all 2150ms ease;
`;

export const ImageBox = styled.div`
    width:${100/12*5+"%"};
    margin-left:${100/12*2+"%"};


    @media (max-width:1024px){
        width:100%;
        max-width:500px;
        margin-left:0;
    }
    
`;

export const Image = styled.img`
    display:block;
    margin-left:-35px;
    
    @media (max-width:1400px){
        max-width:550px;
    }
    @media (max-width:1024px){
        max-width:100%;
    }
    
    @media (max-width:700px){
        max-width:260px;
    }
    
    @media (max-height:900px){
        max-height:50vh;
    }
`;

export const BlueCircleDesign = styled.div`
    position:absolute;
    float:left;

    top: calc(50% - 306px - -35px);
    left: calc(50% - 306px + -56px);
    width:612px;
    height:612px;
    background:#183BB3;
    opacity:.93;
    
    border-radius:50%;
    z-index:-1;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
        "translate(0,0) scale(1) " :
        "translate(0,0) scale(.5) "};

    transition:all 2150ms ease;
    
    @media (max-width:1400px){
        top: 10%;
        left: calc(-5% - 20px);
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
            
    }

    @media (max-width:1024px){
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
    }
`

export const WhiteCircleDesign = styled.div`
    position:absolute;
    float:left;

    top: calc(50% - 287px - -2px);
    left: calc(50% - 287px + 45px);
    width:612px;
    height:612px;
    background: transparent linear-gradient(321deg, #FFFFFF 0%, #CEDFF1 100%) 0% 0% no-repeat padding-box;
    box-shadow: 3px 13px 21px #0000000F;
    opacity:.93;

    border-radius:50%;
    z-index:-1;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) scale(1) " :
    "translate(0,0) scale(.5) "};

    transition:all 2150ms ease;
    
    @media (max-width:1400px){
        top: 5%;
        left: calc(15% + 20px);
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
    }

    @media (max-width:1024px){
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
    }
`

export const LineCircleDesign = styled.div`
    position:absolute;
    float:left;

    top: calc(50% - 287px - 48px);
    left: calc(50% - 287px + 70px);
    width: 595px;
    height: 596px;
    
    box-shadow: 1px 0px 1px 0px #2e3d6d;

    border-radius:50%;

    z-index:-1;
     
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0) scale(1) " :
    "translate(0,0) scale(.5) "};

    transition:all 2150ms ease;
    
    @media (max-width:1400px){
        top: -2%;
        left: calc(10% + 20px);
        
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
    }

    @media (max-width:1024px){
        width:80.2%;
        height:0;

        padding-bottom:80.2%;
    }
`   

export const ScrollMarkerPosition = styled.div`
    position:absolute;
    display:block;

    width:100%;
    height:auto;

    top:-200px;
    left:0;
    
    @media (max-width:1024px){
        top:-90px;
    }
`;