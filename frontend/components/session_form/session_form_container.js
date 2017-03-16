import { connect } from 'react-redux';
import { login, logout, signup, loadDemo, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const demoUser = {username: "jack", password: "password"};

const mapDispatchToProps = (dispatch, { location }) => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  loadDemo: () => dispatch(login(demoUser)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
