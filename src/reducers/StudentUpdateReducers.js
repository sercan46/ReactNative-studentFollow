import {UPDATE_REQUEST_SUCCESS,UPDATE_REQUEST,DELETE_REQUEST_SUCCESS,DELETE_REQUEST} from '../actions/types';

const INITIAL_STATE={
    loadingUpdate:false,loadingDelete:false
};
export default(state=INITIAL_STATE,action)=>{
  switch (action.type) {
    case UPDATE_REQUEST:
        return {loadingUpdate:true};
      break;
      case UPDATE_REQUEST_SUCCESS:
          return INITIAL_STATE
        break;
        case DELETE_REQUEST:
            return {loadingDelete:true};
          break;
          case DELETE_REQUEST_SUCCESS:
              return INITIAL_STATE
            break;
    default:
      return state;

  }
};
