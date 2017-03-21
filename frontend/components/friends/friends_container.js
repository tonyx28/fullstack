import { connect } from 'react-redux';
import { fetchFriends, createFriend, updateFriend, deleteFriend } from '../../actions/friend_actions';
import Friends from './friends';

const mapStateToProps = ( { friends, session } ) => {
  return { friends, currentUser: session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  createFriend: friend => dispatch(createFriend(friend)),
  updateFriend: friend => dispatch(updateFriend(friend)),
  deleteFriend: friend => dispatch(deleteFriend(friend))
});

export default connect(mapStateToProps,mapDispatchToProps)(Friends);
