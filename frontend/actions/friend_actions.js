import * as FriendApiUtil from '../util/friend_api_util';
import { receiveErrors, clearErrors } from './error_actions';

export const RECEIVE_FRIENDS = "RECEIVE_FRIENDS";
export const RECEIVE_FRIEND = "RECEIVE_FRIEND";
export const REMOVE_FRIEND = "REMOVE_FRIEND";

export const receiveFriends = friends => ({
  type: RECEIVE_FRIENDS,
  friends
});

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});

export const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
});


export const fetchFriends = () => dispatch => (
  FriendApiUtil.fetchFriends().then(friends => dispatch(receiveFriends(friends)))
);

export const fetchFriend = id => dispatch => (
  FriendApiUtil.fetchFriend(id).then(friend => dispatch(receiveFriend(friend)))
);

export const createFriend = friend => dispatch => (
  FriendApiUtil.createFriend(friend).then(friend => dispatch(receiveFriend(friend)))
);

export const updateFriend = friend => dispatch => (
  FriendApiUtil.updateFriend(friend).then(friend => dispatch(receiveFriend(friend)))
);

export const deleteFriend = friend => dispatch => (
  FriendApiUtil.deleteFriend(friend).then(friend => dispatch(removeFriend(friend)))
);

window.createFriend = createFriend;
window.fetchFriends = fetchFriends;
window.fetchFriend = fetchFriend;
