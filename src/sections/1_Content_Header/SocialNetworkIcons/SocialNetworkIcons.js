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
    position:absolute;
    display:flex;
    flex-direction:column;

    top:auto;left:auto;
    bottom:12px;
    right:15px;
    
    @media(max-width: 1024px) {
        bottom:12px;
        right:10px;
    }
`;

const Link = styled.a`
    &:not(:last-child) {
        margin-bottom:21px;
    }
    
    @media(max-width: 1024px) {
        &:not(:last-child) {
            margin-bottom:10px;
        }
    }

    &:hover{
        opacity:.8;
        transform:translate(0,-4px);
    }

    transform:translate(0,0px);
    transition:all 150ms ease;
`;

const Icon = styled.img`
    display:block;
    
    
    @media(max-width: 1024px) {
        width:25px;
    }
`;

export default SocialNetworkIcons;