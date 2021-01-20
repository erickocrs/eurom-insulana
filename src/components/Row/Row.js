import React from 'react'
import styled from 'styled-components'

export const Row = styled.div`
    position:relative;
    display:flex;

    flex-direction: row;
    align-items: center;
    justify-content:space-between;
    justify-content:${
        props => props.center ? "center" : (props.right ? "flex-end" : props.left ? "flex-start" : "space-between" )
    };
    
    align-items:${
        props => props.center ? "center" : (props.right ? "flex-end" : props.left ? "flex-start" : "space-between" )
    };


    width:100%;
    max-width:1660px;

    padding: 0 10px;
    box-sizing:border-box;
    
    @media(max-width: 1024px) {
        flex-direction: column;
    }
    
`;

export default Row;