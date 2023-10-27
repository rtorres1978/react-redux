import { API_CALL_FAILURE, API_CALL_REQUEST, API_CALL_SUCCESS } from "../actions/asyncActions";

// Initial State for userState
const initialState = {
  fetching: false,
  token: null,
  error: null,
  logen: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_REQUEST:
       return{
           ...state,
           fetching: true,
           token: null,
           error: null,
           logen: false
       }
    case API_CALL_SUCCESS:
       return{
           ...state,
           fetching: false,
           token: action.payload.token,
           error: null,
           logen: true,    
       }
    case API_CALL_FAILURE:
       return{
           ...state,
           fetching: false,
           token: null,
           error: action.payload.error,
           logen: false,    
       }
    

    default:
      return state;
  }
};
