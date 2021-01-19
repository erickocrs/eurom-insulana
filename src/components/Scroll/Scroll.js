import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";

export const Scroll = (props) => {

    const dispatch = useDispatch();

    const containerRef = React.useRef(null);
    const [scrollY, setScrollY] = React.useState(0);
    const [isScrollingLock, setIsScrollingLock] = React.useState(false);

    const scrollReducer = useSelector((state) => state.scrollReducer);   

    const isScrollTargetMin = () => {
      return ( scrollReducer.currentTarget - 1 >= 0 )
    }
    
    const isScrollTargetMax = () => {

      return ( scrollReducer.currentTarget + 1  < scrollReducer.targetList.length )
    }

    const isTopEnd = (newScrollTop) => {

      if(newScrollTop > 0) {

        newScrollTop = 0;
      }

      return newScrollTop;
    }

    const isBottomEnd = (newScrollTop) => {

      const documentHeight = document.getElementById("root").offsetHeight;          
      const windowHeight = window.innerHeight;

      if(-newScrollTop > documentHeight - windowHeight) {

        newScrollTop = - ( documentHeight - windowHeight);
      }

      return newScrollTop;
    }

    const getScrollTopY = (element) => {
      
      return -(element.getBoundingClientRect().top + (-containerRef.current.getBoundingClientRect().top));
    }

    const scrollToTargetNumber = (newTarget) => {

      if(!isScrollingLock &&
      newTarget != null &&
      newTarget != scrollReducer.currentTarget ) {

        setIsScrollingLock(true);
        
        setTimeout(() => setIsScrollingLock(false),700);

        let newScrollTop = 0;

        newScrollTop = getScrollTopY(scrollReducer.targetList[newTarget].markerRef.current);
        
        newScrollTop = isTopEnd(newScrollTop);

        newScrollTop = isBottomEnd(newScrollTop);

        setScrollY(newScrollTop);

        dispatch({
          type: "SET_CURRENT_SCROLLY",                  
          currentScrollY : newScrollTop,
          currentTarget : newTarget            
        });
      }
    }

    const onWheel = e => {

      let newTarget = null;

      if(e.deltaY > 0 && isScrollTargetMax()){ //to down

        newTarget = scrollReducer.currentTarget + 1;
      }
  
      if(e.deltaY < 0 && isScrollTargetMin()){ //to up 

        newTarget = scrollReducer.currentTarget - 1;
      }

      scrollToTargetNumber(newTarget);
    };


    return(
        <Container
        ref={containerRef}
        onWheel={onWheel}
        scrollY={scrollY}>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
  display:block;
  transform:${props => props.scrollY ? `translate(0px,${props.scrollY}px)` : 'translate(0px,0px)'};
  transition:all 1500ms ease;
`;

export default Scroll;