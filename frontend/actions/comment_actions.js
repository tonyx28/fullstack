import * as CommentApiUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  comment
});

export const fetchComments = bill_id => dispatch => (
  CommentApiUtil.fetchComments(bill_id).then(comments => dispatch(receiveComments(comments)))
);
//
// export const fetchComment = comment => dispatch => (
//   CommentApiUtil.fetchComment(comment).then(comment => dispatch(receiveComment(comment)))
// );

export const createComment = comment => dispatch => (
  CommentApiUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
);

export const deleteComment = comment => dispatch => (
  CommentApiUtil.deleteComment(comment).then(comment => dispatch(removeComment(comment)))
);

// window.fetchComments = fetchComments;
// window.createComment = createComment;
// window.deleteComment = deleteComment;
