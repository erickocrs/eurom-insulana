import styled from 'styled-components'

export const Container = styled.div`
    position:fixed;
    float:left;
    display:${props => props.open ? "flex" : "none"} ;

    top:0;
    left:0;

    justify-content:flex-end;

    z-index:2;

    width:100%;
    height:100%;    
`;

export const Background = styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,.35);
    z-index:-1;

    opacity:${props => props.animate ? "1" : "0"} ;
    transition:all 100ms ease;
`;

export const MenuBox = styled.div`
    
    display:flex;
    align-items:center;

    padding:20px 20px 20px 5.5%;

    width:100%;
    max-width:676px;
    height:100%;

    max-width:500px;
    background:#1A2CAD;

    box-sizing:border-box;

    opacity: ${props => props.animate ? "1" : "0"} ;

    transition:all 500ms ease;
`;

export const List = styled.div`
    width:100%;
    display:flex;

    flex-direction:column;

`;


export const Item = styled.a`
    font-size:28px;
    font-family:'Morebi Rounded';
    font-weight:500;
    letter-spacing: 0px;
    text-decoration:none;

    margin-bottom:55px;
    color:#ffffff;
`;

export const CloseButton = styled.div`
    position:absolute;
    top:36px;
    left:auto;
    right:36px;

    width:36px;
    height:36px;
    
    transform:rotate(45deg);

    cursor: pointer;

    &:after{
        content:"";
        position:absolute;

        top:50%;
        left:0%;

        width:100%;
        height:3px;

        transform:translate(0,-50%);

        background:#ffffff;        
    }

    &:before{
        content:"";
        position:absolute;

        top:0;
        left:50%;
        
        width:3px;
        height:100%;

        transform:translate(-50%,0);

        background:#ffffff;        
    }
    
`;