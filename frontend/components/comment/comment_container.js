import { connect } from 'react-redux';
import { fetchComments, fetchComment, createComment, deleteComment } from '../../actions/comment_actions';

import Comment from './comment';


const mapStateToProps = ({ session, comments }, {bill_id}) => {

  return ({
    currentUser: session.currentUser,
    bill_id,
    comments
  })
}

const mapDispatchToProps = dispatch => ({
  fetchComments: bill_id => dispatch(fetchComments(bill_id)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
})


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
