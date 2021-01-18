import React from 'react'
import styled from 'styled-components'
import IconFacebook from '~/assets/images/facebook_icon.png'
import IconLinkedin from '~/assets/images/LinkedIn_icon.png'
import IconInstagram from '~/assets/images/instagram_icon.png'

export const SocialNetworkIcons = () => {

    return(
        <IconsContainer>
            <Link href="./" target="_blank">
                <Icon src={IconFacebook}/>
            </Link>
            <Link href="./" target="_blank">
                <Icon src={IconLinkedin}/>
            </Link>
            <Link href="./" target="_blank">
                <Icon src={IconInstagram}/>
            </Link>
        </IconsContainer>
    )
}

const IconsContainer = styled.div`
    position:relative;
    display:flex;

    flex-direction:column;
    margin-top:-126px;
    margin-right:0px;
`;

const Link = styled.a`
    margin-bottom:21px;
    &:hover{
        opacity:.8;
        transform:translate(0,-4px);
    }

    transform:translate(0,0px);
    transition:all 150ms ease;
`;

const Icon = styled.img`
`;

export default SocialNetworkIcons;