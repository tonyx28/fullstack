import { connect } from 'react-redux';
import { fetchBills, createBill, updateBill, deleteBill } from '../../actions/bill_actions';
// import { fetchFriend } from '../../util/friend_api_util';
import Bills from './bills';

const mapStateToProps = ( { bills, session, friends } ) => {
  return { bills, currentUser: session.currentUser, friends };
};

const mapDispatchToProps = dispatch => ({
  fetchBills: () => dispatch(fetchBills()),
  createBill: bill => dispatch(createBill(bill)),
  updateBill: bill => dispatch(updateBill(bill)),
  deleteBill: bill => dispatch(deleteBill(bill)),
  // fetchFriend: id => fetchFriend(id)
});

export default connect(mapStateToProps,mapDispatchToProps)(Bills);
