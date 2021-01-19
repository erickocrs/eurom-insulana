import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";

export const ScrollMarker = (props) => {

    const dispatch = useDispatch();
    const markerRef = React.useRef(null);

    React.useEffect(() => {

        if(markerRef) {
            console.log(" props.markerName",  props.markerName)
            const newTarget = {
                markerRef : markerRef,
                markerName : props.markerName ? props.markerName : " "
            }
            console.log("________________")
            console.log("newTarget",  newTarget)
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
    
    ${({ absolute }) => absolute && `
        position:absolute;
        top:0;
        width:1px;
        height:1px;    
    `}
`;

export default ScrollMarker;