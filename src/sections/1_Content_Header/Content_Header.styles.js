import styled, { keyframes } from 'styled-components'
import RowComponent from '~/components/Row/Row'
import ColComponent from '~/components/Col/Col'
import LightLeakSrc from '~/assets/images/light-leak.png'

export const ContentHeaderSection = styled.section`
  min-height:100vh;
  min-height: -webkit-fill-available;
  
  align-items:center;
  justify-content:center;

  box-sizing:border-box;
`;

export const ContentRow = styled(RowComponent)`
  height:100vh;
  min-height:-webkit-fill-available;
  max-height:-webkit-fill-available;

  padding-top:98px;
  
  @media (max-width:765px){
    padding-top:70px;
  }

  box-sizing:border-box;
  z-index:1;
`;

export const Row = styled(RowComponent)`
  
`;

export const ImageContainer = styled(ColComponent)`
  position:relative;
  justify-content:center;

  width:calc(100%/12*8);
`;

export const ImageBox = styled.div`
  position:relative;
  max-width:calc(100% + 20px);
  width:auto;  
  margin:10px 0 0 20px;   
  @media(max-width: 1024px) {
    max-width:100%;
    margin:-45px 0 0 0 ;   
  }
`;

export const ContentImage = styled.img`
  width:auto;  
  max-width:calc(100% + 20px);
  max-height:80vh;

  opacity:0;
  
  @media(max-width: 1024px) {
    max-width:100%;
    max-height:40vh;
  }
`;

export const LightLeak = styled.div`

  position:absolute;
  display:block;

  top: 3%;
  left: 35%;

  width: 16.7%;
  height: 280px;

  background:url(${LightLeakSrc}) top center no-repeat ;
  background-size:contain;

  z-index:1;
  
  @media(max-width: 1024px) {
    top: -1%;
    left: 39%;
    width: 12%;
  }

  opacity:0;  
  
  animation:${props => props.animate ? lightAnimation : "" } ease-in-out 6000ms infinite;
`;

const lightAnimation = keyframes`
  0% { transform:translate(110px,0)  rotate(-17deg) scale(.7); opacity:0;}
  11% {transform:translate(1px,7px)  rotate(-17deg) scale(.8); opacity:0.35;}
  34% { transform:translate(-40px,20px)  rotate(-10deg) scale(.8); opacity:0;}
  100% { transform:translate(-40px,20px)  rotate(-10deg) scale(.8); opacity:0;}
`

export const ContentText = styled(ColComponent)`
  display:flex;

  width:calc(100%/12*6);

  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
  
  padding:0 30px 0 83px; 
  margin:-23px 0 0 0;   

  box-sizing:border-box;
  
  @media(max-width: 1024px) {
    padding:0px;  
    align-items:center;
  }
`;

export const Text = styled.h2`
  max-width:570px;

  margin-bottom: 44px;
  margin-top:23px;

  font-size:42px;
  font-weight: 500;  
  letter-spacing: 0px;
  color:#1A2CAD;

  opacity:${props => props.animate ? "1" : "0"};  
  transform: ${props => props.animate ? 
  "translate(0,0)" :
  "translate(0,100px)"};
  
  @media(max-width: 1600px) {
    font-size:36px;
  }
  
  @media(max-width: 1300px) {    
    font-size:30px;
  }

  @media(max-width: 1024px) {
    max-width:450px;
    text-align:center;
    font-size:26px;
    margin-bottom: 10px;
    margin-top:15px;

  }
  @media(max-width: 700px) {
    font-size:22px;
    margin-bottom: 5px;
  }

  transition:all 1500ms ease;
`;

export const Button = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;

  width:287px;
  height:52px;    

  background:#1A2CAD;
  border-radius: 17px;
  
  font-size:19px;
  font-family:'Montserrat';
  letter-spacing:0px;
  font-weight: 500;

  text-align: center;
  color:#ffffff;

  opacity:${props => props.animate ? "1" : "0"};  
  transform: ${props => props.animate ? 
  "translate(0,0) scale(1) " :
  "translate(0px,120px) scale(0.95, 1) "};

  transition:all 2800ms ease;
  
  &:hover{
        opacity:.9;
        transition:all 100ms ease;
    }

  cursor: pointer;

  @media(max-width: 1024px) {
    width:200px;
    height:52px;    
  }
  @media(max-width: 700px) {
    font-size:16px;
  }

`;

const ImageLayer = styled.img`
  position:absolute;
  float:left;
  display:block;
  top:0;
  left:0;
  width:calc(100% + 20px);
  height:auto;
  
  @media(max-width: 1024px) {
    width:100%;
  }
`;

export const ImageLayerShape = styled(ImageLayer)`

`;

export const ImageLayerVirus = styled(ImageLayer)`

  animation:${props => props.animate ? imageLayerVirusAnimation : "" } ease 15000ms infinite;

`;

const imageLayerVirusAnimation = keyframes`
  0% { transform:translate(0,0)  scale(1); opacity:1;}
  20% { transform:translate(0,0)  scale(1); opacity:1;}
  50% { transform:translate(0,0)  scale(1); opacity:.15;}
  70% { transform:translate(0,0)  scale(1); opacity:.15;}
  100% { transform:translate(0,0)  scale(1); opacity:1;}
`

export const ImageLayerProfissional = styled(ImageLayer)`
`;

const imageLayerFogAnimation = keyframes`
  0% { transform:translate(0,-2%)  scale(.5); opacity:0;}
  10%{ opacity:.8;}
  60%{ opacity:.8;}
  100% { transform:translate(-120%,0)  scale(1.3); opacity:0;}
`

const imageLayerFogAnimation2 = keyframes`
  0% { transform:translate(0,5%)  scale(.5) scale(-1,1); opacity:0;}
  10%{ opacity:.8;}
  60%{ opacity:.8;}
  100% { transform:translate(-120%,-10%)  scale(2) scale(-1,1); opacity:0;}
`

export const ImageFog = styled(ImageLayer)`
  width:auto;

  top:-17%;
  left:auto;
  right:-15%;
  z-index:1;

  width:43%;
  height:auto;

  animation:${props => props.animate ? ( props.fog === 2 ? imageLayerFogAnimation2 : imageLayerFogAnimation ) : "" } ease 15000ms infinite;
`;
