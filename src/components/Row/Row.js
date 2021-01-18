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
        props => props.center ? "center" : (props.right ? "flex-start" : props.left ? "flex-start" : "space-between" )
    };


    width:100%;
    max-width:1640px;

    padding: 0 20px;
    
`;

export default Row;