import { connect } from 'react-redux';
import { createBill } from '../../actions/bill_actions';
import AddBill from './add_bill';

const mapStateToProps = ( { friends, session, bills } ) => {
  return { friends, currentUser: session.currentUser, bills };
};

const mapDispatchToProps = dispatch => ({
  createBill: bill => dispatch(createBill(bill))
});

export default connect(mapStateToProps,mapDispatchToProps)(AddBill);
