import styled from 'styled-components'

export const Section = styled.section`
    padding:0 0 250px;
`;

export const Infos = styled.div`
    position:relative;
    margin-top:16%;
    padding-left:9%;
    width:${100/12*5+"%"};
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
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(250px,0) rotateX(30deg) rotateY(15deg) "};

    transition:all 2200ms ease;
`;


export const Title = styled.div`
    margin-bottom:18px;

    font-size:36px;
    font-weight:500;
    letter-spacing: -1.8px;
    color:#ffffff;     
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(-200px,0)"};

    transition:all 2000ms ease;
`;

export const Text = styled.div`
    max-width:400px;
    margin-bottom:20px;

    font-size:25px;
    font-weight:400;
    letter-spacing: 0;
    color:#ffffff;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transform: ${props => props.animate ? 
    "translate(0,0)" :
    "translate(-275px,0)"};

    transition:all 2100ms ease;
`;

export const Button = styled.div`
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
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(-250px,0) rotateX(-30deg) rotateY(15deg) "};

    transition:all 2150ms ease;
    
    &:hover{
        opacity:.7;
        transition:all 100ms ease;
    }

    cursor: pointer;
`;

export const ImageContainer = styled.div`
    position:relative;
    float:left; 

    width:auto;
    height:auto;
    z-index:0;
    
    opacity:${props => props.animate ? "1" : "0"};  
    transition:all 2150ms ease;
`;

export const ImageBox = styled.div`
    width:${100/12*5+"%"};
    margin-left:${100/12*2+"%"};
`;

export const Image = styled.img`
    display:block;
    margin-left:-35px;
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
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(30deg) "};

    transition:all 2150ms ease;
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
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(10deg) "};

    transition:all 2150ms ease;
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
    "translate(0,0) rotateX(00deg) rotateY(00deg) " :
    "translate(0,0) rotateX(70deg) rotateY(-30deg) "};

    transition:all 2150ms ease;
`   
