import { connect } from 'react-redux';
import { updateBill } from '../../actions/bill_actions';
import SettleBill from './settle_bill';

const mapStateToProps = ( { friends, session, bills } ) => {
  return { currentUser: session.currentUser, bills };
};

const mapDispatchToProps = dispatch => ({
  updateBill: bill => dispatch(updateBill(bill))
});

export default connect(mapStateToProps,mapDispatchToProps)(SettleBill);
