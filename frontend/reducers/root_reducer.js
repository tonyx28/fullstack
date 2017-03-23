import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import FriendReducer from './friend_reducer';
import BillReducer from './bill_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  friends: FriendReducer,
  bills: BillReducer,
  comments: CommentReducer
});

export default rootReducer;
