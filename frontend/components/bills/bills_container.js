import { connect } from 'react-redux';
import { fetchBills, createBill, updateBill, deleteBill } from '../../actions/bill_actions';
import Bills from './bills';

const mapStateToProps = ( { bills, session, friends } ) => {
  return { bills, currentUser: session.currentUser, friends };
};

const mapDispatchToProps = dispatch => ({
  fetchBills: (bill_id) => dispatch(fetchBills(bill_id)),
  createBill: bill => dispatch(createBill(bill)),
  updateBill: bill => dispatch(updateBill(bill)),
  deleteBill: bill => dispatch(deleteBill(bill)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Bills);
