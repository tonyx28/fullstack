import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import UserButton from './user_button';

const mapStateToProps = ( { session } ) => {

  return { currentUser: session.currentUser }
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(UserButton);
