import * as BillApiUtil from '../util/bill_api_util';


export const RECEIVE_BILLS = "RECEIVE_BILLS";
export const RECEIVE_BILL = "RECEIVE_BILL";
export const REMOVE_BILL = "REMOVE_BILL";


export const receiveBills = bills => ({
  type: RECEIVE_BILLS,
  bills
});

export const receiveBill = bill => ({
  type: RECEIVE_BILL,
  bill
});

export const removeBill = bill => ({
  type: REMOVE_BILL,
  bill
});

export const fetchBills = (friend_id) => dispatch => (
  BillApiUtil.fetchBills(friend_id).then(bills => dispatch(receiveBills(bills)))
);

export const createBill = bill => dispatch => (
  BillApiUtil.createBill(bill).then(bill => dispatch(receiveBill(bill)))
);

export const deleteBill = bill => dispatch => (
  BillApiUtil.deleteBill(bill).then(bill => dispatch(removeBill(bill)))
);

window.fetchBills = fetchBills;
// window.createBill = createBill;
// window.deleteBill = deleteBill;
