const INITIAL_STATE = {
    open: false
  };
  
  export default function menuReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_MENU_OPEN": 
        return {
          ...state,
          open: action.open
        }
      default:
        return state;
    }
  }