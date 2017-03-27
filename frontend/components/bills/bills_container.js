import { connect } from 'react-redux';
import { fetchBills, createBill, updateBill, deleteBill } from '../../actions/bill_actions';
import { fetchComments } from '../../actions/comment_actions';
import Bills from './bills';

const mapStateToProps = ( { bills, session, friends, comments } ) => {
  return { bills, currentUser: session.currentUser, friends, comments };
};

const mapDispatchToProps = dispatch => ({
  fetchBills: (friend_id) => dispatch(fetchBills(friend_id)),
  createBill: bill => dispatch(createBill(bill)),
  updateBill: bill => dispatch(updateBill(bill)),
  deleteBill: bill => dispatch(deleteBill(bill)),
  fetchComments: () => dispatch(fetchComments())
});

export default connect(mapStateToProps,mapDispatchToProps)(Bills);
