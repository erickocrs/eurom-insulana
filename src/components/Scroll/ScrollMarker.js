import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";

export const ScrollMarker = (props) => {

    const dispatch = useDispatch();
    const markerRef = React.useRef(null);

    React.useEffect(() => {

        if(markerRef) {
            const newTarget = {
                markerRef : markerRef.current,
                markerName : props.markerName ? props.markerName : " "
            }
            
            dispatch({
                type: "SET_NEW_TARGET",
                newTargetList : newTarget
            });
        }

    }, []);

    return (
        <Marker absolute={props.absolute} ref={markerRef}>
            {props.children}
        </Marker>
    )
}

const Marker = styled.div`
    width:100%;
    height:auto;

    display:block;
    
    ${props => props.absolute && `
        position:absolute;
        top:0;
        width:1px;
        height:1px;    
    `}
`;

export default ScrollMarker;