import React from 'react'
import styled, { keyframes } from 'styled-components'

import './GuideToScrollBar.scss';

import GuideToScrollSrc from '~/assets/images/Border_seta.png'
import GuideToScrollArrowSrc from '~/assets/images/seta.png'

export const GuideToScrollBar = () => {

    return (
        <GuideToScroll
        className="GuideToScroll"
        backgroundImg={GuideToScrollSrc}>
            <GuideToScrollArrow
            className="GuideToScrollArrow"
            src={GuideToScrollArrowSrc}/>
        </GuideToScroll>
    );
}

const GuideToScroll = styled.div`
    position: relative;
    display:flex;

    width:48px;
    height:88px;

    background-position: center center;
    background-repeat: no-repeat;
    background-image:${ props => "url('" + props.backgroundImg + "')" };
    background-size:contain;

    margin-top:-86px;
    @media(max-width: 1024px) {
        margin-top:-15px;
        width:30px;
        height:55px;
    }
`;

const arrowAnimation = keyframes`
 0% { transform:translate(0,0); opacity:1;}
 50% { transform:translate(0,10px); opacity:.7;}
 100% { transform:translate(0,0); opacity:1;} 
`

const GuideToScrollArrow = styled.img`
    position: absolute;
    top:15px;
    left:calc(50% - 7.5px);

    animation:${ arrowAnimation } ease 1000ms infinite;
    @media(max-width: 1024px) {
        top:10px;    
        left:calc(50% - 5px);
        width:10px;
    }
`;


export default GuideToScrollBar;