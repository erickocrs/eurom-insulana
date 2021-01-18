import styled from 'styled-components'
import RowComponent from '~/components/Row/Row'

export const Container =  styled.footer`
    width:100%;
    background:#1A2CAD;
    margin:88px 0 0 0;
    padding-top:53px;    
`;

export const Row =  styled(RowComponent)`
    width:100%;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

export const InfoText = styled.span`
    font-size:19px;
    font-weight:500;
    font-family:'Montserrat';
    color:#ffffff;
    letter-spacing: 0px;

    margin-bottom:12px;
`
export const SocialNetworkList = styled.div`
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

export const SocialNetworkLink = styled.a`
    margin:0 13px;
`

export const SocialNetworkIcon = styled.img`
`

export const SiteTitle = styled.h1`
    margin-top:48px;

    font-size:18px;
    font-weight:900;
    letter-spacing: 0px;

    color:#ffffff;    
`
export const SiteContact = styled.span`
    margin-top:12px;

    font-size:16px;
    font-weight:400;
    font-family:'Montserrat';
    color:#ffffff;
    letter-spacing: 0px;
`
export const SiteAdress = styled.span`
    margin-top:6px;

    font-size:16px;
    font-weight:400;
    font-family:'Montserrat';
    color:#ffffff;
    letter-spacing: 0px;
`
export const SiteEmail = styled.span`
    margin-top:11px;

    font-size:16px;
    font-weight:500;
    font-family:'Montserrat';
    color:#ACC2E1;
    text-decoration:underline;
    letter-spacing: 0px;
`

export const SubInfos =  styled(RowComponent)`
    width:100%;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    padding:65px 0 36px;
`;

export const Link = styled.a`
    font-size:16px;
    font-weight:500;
    font-family:'Montserrat';
    color:#ACC2E1;
    text-decoration:underline;
    letter-spacing: 0px;
    margin-left:-10px;
`

export const LinkCookies = styled.a`
    font-size:16px;
    font-weight:500;
    font-family:'Montserrat';
    color:#ACC2E1;
    text-decoration:underline;
    letter-spacing: 0px;
    padding-left:5px;

`

export const Copyright = styled.span`
    font-size:16px;
    font-weight:500;
    font-family:'Montserrat';
    color:#ffffff;
    letter-spacing: 0px;
    margin:0 167px;
`