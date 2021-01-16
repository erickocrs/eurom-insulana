import React from 'react'
import styled from 'styled-components'

import './GuideToScrollBar.scss';

import GuideToScrollSrc from '~/assets/images/Border_seta.png'
import GuideToScrollArrowSrc from '~/assets/images/seta.png'

import Container from '~/components/Container/Container.js'

export const GuideToScrollBar = () => {

    return (
        <GuideToScrollBarSection className="GuideToScrollBarSection">
          <Container center>
                <GuideToScroll
                className="GuideToScroll"
                backgroundImg={GuideToScrollSrc}>
                    <GuideToScrollArrow
                    className="GuideToScrollArrow"
                    src={GuideToScrollArrowSrc}/>
              </GuideToScroll>
          </Container>
        </GuideToScrollBarSection>
    );
}

const GuideToScrollBarSection = styled.section``;

const GuideToScroll = styled.div`
    background-image:${ props => "url('" + props.backgroundImg + "')" };
`;

const GuideToScrollArrow = styled.img``;

export default GuideToScrollBar;