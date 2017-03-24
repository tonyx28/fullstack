export const fetchTransactions = (limit=false) => (
  $.ajax({
    method: 'GET',
    url: '/api/bills',
    data: { null, limit }
  })
)
