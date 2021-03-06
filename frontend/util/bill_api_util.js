export const fetchBills = (friend_id) => (
  $.ajax({
    method: 'GET',
    url: '/api/bills',
    data: { friend_id }
  })
)

export const createBill = bill => (
  $.ajax({
    method: 'POST',
    url: '/api/bills',
    data: { bill }
  })
)

export const updateBill = bill => (
  $.ajax({
    method: 'PATCH',
    url: `api/bills/${bill.id}`,
    data: { bill }
  })
)

export const deleteBill = bill => (
  $.ajax({
    method: 'DELETE',
    url: `api/bills/${bill.id}`
  })
)
