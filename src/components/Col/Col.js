import styled from 'styled-components'

export const Col = styled.div`
    position:relative;
    display:flex;

    align-items: flex-start;
    justify-content:flex-start;

    width:100%;

    box-sizing:border-box;

    
    @media(max-width: 1024px) {
        width:100%!important;
    }
`;

export default Col;