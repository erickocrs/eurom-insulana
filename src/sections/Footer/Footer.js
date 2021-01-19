import React from 'react'
import styled from 'styled-components'
import ScrollMarker from '~/components/Scroll/ScrollMarker'
import {
Row,
SubInfos,
Container,
InfoText,
SocialNetworkList,
SocialNetworkLink,
SocialNetworkIcon,
SiteTitle,
SiteContact,
SiteAdress,
SiteEmail,
Link,
LinkCookies,
Copyright
 } from './Footer.styles'

import FacebookIcon from '~/assets/images/facebook_footer.png'
import LinkedinIcon from '~/assets/images/linkedin_footer.png'
import InstagramIcon from '~/assets/images/instagram_footer.png'

export const Footer = () => {
    return(
        <ScrollMarker markerName="Footer">
            <Container>
                <Row column>
                    <InfoText>Siga-nos</InfoText>
                    <SocialNetworkList>
                        <SocialNetworkLink href="./" target="_blank">
                            <SocialNetworkIcon src={FacebookIcon}/>
                        </SocialNetworkLink>
                        <SocialNetworkLink href="./" target="_blank">
                            <SocialNetworkIcon src={LinkedinIcon}/>
                        </SocialNetworkLink>
                        <SocialNetworkLink href="./" target="_blank">
                            <SocialNetworkIcon src={InstagramIcon}/>
                        </SocialNetworkLink>
                    </SocialNetworkList>
                    <SiteTitle>INSULANA</SiteTitle>
                    <SiteContact>Tel. 912 240 170 / 928 495 568</SiteContact>
                    <SiteAdress>Rua da Samba nº 30 / 30</SiteAdress>
                    <SiteEmail>insulana@insulana.com</SiteEmail>
                </Row>
                <SubInfos>
                    <Link href="./" >Termos e Condições</Link>
                    <Copyright>© INSULANA 2020. Todos os direitos reservados</Copyright>
                    <LinkCookies href="./" >Política de Cookies</LinkCookies>
                </SubInfos>
            </Container>
        </ScrollMarker>
    )
}

export default Footer;