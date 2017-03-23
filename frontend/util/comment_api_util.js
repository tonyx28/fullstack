export const fetchComments = bill_id => (
  $.ajax({
    method: 'GET',
    url: `/api/bills/${bill_id}/comments`
  })
)

export const createComment = (bill_id, comment) => (
  $.ajax({
    method: 'POST',
    url: `/api/bills/${bill_id}/comments`,
    data: { comment }
  })
)

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
)
