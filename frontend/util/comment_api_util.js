export const fetchComments = bill_id => (
  $.ajax({
    method: 'GET',
    url: `/api/comments`,
    data: { bill_id }
  })
)

// export const fetchComment = comment => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/comments/${comment.id}`
//   })
// )

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { comment }
  })
)

export const deleteComment = comment => (
  $.ajax({
    method: 'DELETE',
    url: `api/comments/${comment.id}`
  })
)
