import * as TransactionApiUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
})

export const fetchTransactions = limit => dispatch (
  TransactionApiUtil.fetchTransactions(limit).then(transactions => dispatch(transactions)))
)
