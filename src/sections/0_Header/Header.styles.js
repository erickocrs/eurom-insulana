import styled from 'styled-components'
import RowComponent from '~/components/Row/Row.js'

export const Row = styled(RowComponent)`

    max-width:calc(1640px + 40px + 40px);

    padding: 0 40px 0 40px;
    
    box-sizing:border-box;
    
    @media(max-width: 1024px) {
        flex-direction:row;
    }

    @media(max-width: 765px) {
        padding: 0 25px;
    }

    @media(max-width: 350px) {
        padding: 0 20px 0 25px;
    }
`;

export const HeaderSection = styled.header`
    position:fixed;
    display:flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    top:0;
    left:0;

    width:100%;
    height:98px;

    background:#ffffff;
    box-shadow: 0px 3px 6px #00000005;

    z-index: 1;


    @media (max-width:765px){
        height:70px;
    }
`;

export const RightContainer = styled.div`
    display:flex;   

    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const OpenMenuStyleBar = styled.div``;

export const LogoLink = styled.a`
`;

export const Logo = styled.img`
    margin: 5px 0px 0px 0px;
    
    @media (max-width:765px){
        width:154px;
        margin: 9px 0px 0px 5px;
    }
`;

export const ButtonFreeQuote = styled.div`
    display:flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    background: #1A2CAD;
    border: 2px solid #1A2CAD;
    width: 192px;
    height:37px;
    line-height: 36px;
    color:#ffffff;

    margin-right: 97px;

    border-radius: 11px;

    font-size:17px;
    font-weight: 700;

    &:hover{
        opacity:.9;
    }

    transition:all 100ms ease;
    
    cursor: pointer;

    @media(max-width: 1024px) {
        display:none;
    }
`;

export const ButtonOpenMenu = styled.a`

    width:42px;

    margin:5px 0px 0 0;

    cursor: pointer;
    
    @media (max-width:765px){
        margin:2px 0px 0 0;
        width:38px;
    }

    div{
        width: 100%;
        height: 2px;

        background:#1a2cad;

        &:not(:last-child){

            margin-bottom: 12px;
                    
            @media (max-width:765px){
                margin-bottom: 10px;
            }
        }
    }
`;