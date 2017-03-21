import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Main from './main';

const mapStateToProps = ( {session} ) => {

  return { currentUser: session.currentUser }
};


export default connect(mapStateToProps,null)(Main);
