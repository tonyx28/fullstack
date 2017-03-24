import { connect } from 'react-redux';
import { fetchFriends, createFriend, updateFriend, deleteFriend } from '../../actions/friend_actions';
import Friends from './friends';
import { fetchBills } from '../../actions/bill_actions';

const mapStateToProps = ( { friends, session } ) => {
  return { friends, currentUser: session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchFriends: () => dispatch(fetchFriends()),
  createFriend: friend => dispatch(createFriend(friend)),
  updateFriend: friend => dispatch(updateFriend(friend)),
  deleteFriend: friend => dispatch(deleteFriend(friend)),
  fetchBills: bill_id => dispatch(fetchBills(bill_id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Friends);
