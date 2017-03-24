import { RECEIVE_TRANSACTIONS } from '../actions/transaction_actions';


const transactionReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_TRANSACTIONS:
      return action.transactions;
    default:
      return state;
  }
}

export default transActionReducer;
