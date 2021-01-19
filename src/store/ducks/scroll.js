const INITIAL_STATE = {
    currentScrollY: 0,    
    currentTarget: 0,    
    targetList: []
  };
  
  export default function scrollReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_CURRENT_SCROLLY": 
        return {
          ...state,
          currentScrollY: action.currentScrollY,
          currentTarget: action.currentTarget
        }
      case 'SET_NEW_TARGET': 
        return {
          ...state,
          targetList: [...state.targetList, action.newTargetList]
        };
      default:
        return state;
    }
  }