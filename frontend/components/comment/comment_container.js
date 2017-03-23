import { connect } from 'react-redux';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import Comment from './comment'


const mapStateToProps ({ session, comment }, {bill_Id}) => {
  return ({ currentUser: session.currentUser, comment, ownProps })
}

const mapDispatchToProps = dispatch => ({
  fetchComments: bill_id => dispatch(fetchComments(bill_id)),
  createComment: comment => dispatch(fetchComment(comment)),
  deleteComment: comment => dispatch(deleteComment(comment))
})
