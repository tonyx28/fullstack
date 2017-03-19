import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';


const rootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer
});

export default rootReducer;
