import styled from 'styled-components'
import RowComponent from '~/components/Row/Row.js'

export const Row = styled(RowComponent)``;

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
`;

export const RightContainer = styled.div`
    display:flex;   

    flex-direction: row;
    align-items: center;
    justify-content: left;
`;

export const OpenMenuStyleBar = styled.div``;

export const Logo = styled.img`
    margin: 5px 0px 0px 0px;
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
`;

export const ButtonOpenMenu = styled.div`
    width:42px;
    margin:5px 0px 0 0;
    cursor: pointer;


    div{
        width: 100%;
        height: 2px;
        background:#1a2cad;

        &:not(:last-child){
            margin-bottom: 12px;
        }
    }
`;