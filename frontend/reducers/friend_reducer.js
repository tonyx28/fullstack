import { RECEIVE_FRIENDS, RECEIVE_FRIEND, REMOVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';
import values from 'lodash/values';

const friendReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_FRIENDS:
      return action.friends;
    case RECEIVE_FRIEND:
      const newFriend = {[action.friend.id]:action.friend};
      return Object.assign([], state, newFriend);
    case REMOVE_FRIEND:
      nextState = merge({}, state);
      delete nextState[action.friend.id];
      return nextState;
    default:
      return state;
  }
}

export default friendReducer;
