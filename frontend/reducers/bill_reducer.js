import { RECEIVE_BILLS, RECEIVE_BILL, REMOVE_BILL } from '../actions/bill_actions';
import merge from 'lodash/merge';

const billReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_BILLS:
      return action.bills;
    case RECEIVE_BILL:
      const newBill = {[action.bill.id]:action.bill};
      return merge([], state, newBill);
    case REMOVE_BILL:
      nextState = merge({}, state);
      delete nextState[action.bill.id];
      return nextState;
    default:
      return state;
  }
}

export default billReducer;
