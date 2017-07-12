import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';
import merge from 'lodash/merge';



const errorReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      let newState = {};
      return newState;
    case CLEAR_ERRORS:
      return newState;
    default:
      return state;
  }
};

export default errorReducer;
