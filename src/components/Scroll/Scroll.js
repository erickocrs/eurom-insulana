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

      const rootEl = document.getElementById("root");

      if(rootEl){

        const documentHeight = rootEl.offsetHeight;          
        const windowHeight = window.innerHeight;

        if(-newScrollTop > documentHeight - windowHeight) {

          newScrollTop = - ( documentHeight - windowHeight);
        }
      }
      
      return newScrollTop;
    }

    const getScrollTopY = (element) => {
      
      if(element && containerRef && containerRef.current)
      {
        return -(element.getBoundingClientRect().top + (-containerRef.current.getBoundingClientRect().top));
      }
      else
      {
        return 0;
      }
    }

    const scrollToTargetNumber = (newTarget, force) => {
      if((force === true) || (!isScrollingLock &&
      newTarget != null &&
      newTarget != scrollReducer.currentTarget )) {

        setIsScrollingLock(true);
        
        setTimeout(() => setIsScrollingLock(false),700);

        let newScrollTop = 0;
        
        if(force !== true)
        newScrollTop = getScrollTopY(scrollReducer.targetList[newTarget].markerRef);
        
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

    const onKeyUp = e => {
      
      let newTarget = null;

      if((
        e.keyCode == 40 ||
        e.keyCode == 34 ||
        e.keyCode == 32 ||
        e.keyCode == 13 ) && isScrollTargetMax())//to down
      {
        newTarget = scrollReducer.currentTarget + 1;
        scrollToTargetNumber(newTarget);
      }
      
      if((
        e.keyCode == 38 ||
        e.keyCode == 33) && isScrollTargetMin())//to up
      {        
        newTarget = scrollReducer.currentTarget - 1;
        scrollToTargetNumber(newTarget);
      }      
      
      if(e.keyCode == 36){//to home
        newTarget = 0;
        scrollToTargetNumber(newTarget);
      }

      
      if(e.keyCode == 35){//to end
        newTarget = scrollReducer.targetList.length -1;
        scrollToTargetNumber(newTarget);
      }
    };

    let touchMoves = [];
    const onTouchStart = (e) => {
      touchMoves = [];
    }

    const onTouchMove = (e) => {
      touchMoves.push(e.touches[0].clientY);
    }

    const onTouchEnd = (e) => {
      let newTarget = null;

      if(touchMoves.length > 0){
        if(touchMoves[1] < touchMoves[0] && isScrollTargetMax()) {
          newTarget = scrollReducer.currentTarget + 1;
          scrollToTargetNumber(newTarget);
        }
        
        if(touchMoves[0] < touchMoves[1] && isScrollTargetMin()) {
          newTarget = scrollReducer.currentTarget - 1;
          scrollToTargetNumber(newTarget);        
        }
      }      

      touchMoves = [];
    }

    const onResize = e => {
      let newTarget = 0;
      scrollToTargetNumber(newTarget, true);
    }

    React.useEffect(() => {
      window.addEventListener('resize', onResize)
    },[]);

    return(
        <Container 
          tabIndex="0"
          ref={containerRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onWheel={onWheel}
          onKeyUp={onKeyUp}          
          scrollY={scrollY}>
          {props.children}
        </Container>
    )
}

const Container = styled.div`
  display:block;
  width:100%;
  transform:${props => props.scrollY ? `translate(0px,${props.scrollY}px)` : 'translate(0px,0px)'};
  transition:all 1500ms ease;
`;

export default Scroll;