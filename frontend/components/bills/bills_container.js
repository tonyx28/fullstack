import { connect } from 'react-redux';
import { fetchBills, createBill, updateBill, deleteBill } from '../../actions/bill_actions';
import Bills from './Bills';

const mapStateToProps = ( { bills, session } ) => {
  return { bills, currentUser: session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchBills: () => dispatch(fetchBills()),
  createBill: bill => dispatch(createBill(bill)),
  updateBill: bill => dispatch(updateBill(bill)),
  deleteBill: bill => dispatch(deleteBill(bill))
});

export default connect(mapStateToProps,mapDispatchToProps)(Bills);
