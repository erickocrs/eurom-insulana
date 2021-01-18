import styled, { keyframes } from 'styled-components'
import RowComponent from '~/components/Row/Row'
import LightLeakSrc from '~/assets/images/light-leak.png'

export const ContentHeaderSection = styled.section``;

export const ContentImage = styled.img`
  margin:118px 0 0 0px;
`;

export const ImageContainer = styled.div`
  position:relative;
`;

export const LightLeak = styled.div`
  position:absolute;
  display:block;
  top: 18%;
  left: 29.8%;
  width: 156px;
  height: 280px;
  background:url(${LightLeakSrc}) center center no-repeat ;
  z-index:1;

  opacity:0;  
  animation:${props => props.animate ? lightAnimation : "" } ease 13000ms infinite;
`;

const lightAnimation = keyframes`
 0% { transform:translate(110px,0) rotate(-17deg) scale(.7); opacity:0;}
 11% {transform:translate(1px,7px) rotate(-17deg) scale(.8); opacity:0.35;}
 34% { transform:translate(-40px,20px) rotate(-10deg) scale(.8); opacity:0;}
 100% { transform:translate(-40px,20px) rotate(-10deg) scale(.8); opacity:0;}
`

export const ContentText = styled.div`
  display:flex;

  flex-direction: column;
  align-items:flex-start;
  justify-content: flex-start;
  
  padding-left:63px;
`;


export const Row = styled(RowComponent)`
  align-items:center;
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

`;