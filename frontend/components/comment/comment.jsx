import React from 'react';
import CommentContainer from './comment_container';

class Comment extends React.Component{
  constructor(props){
    super(props)

  }


// comments.filter(obj => obj.bill_id === bill_id)

  render(){
    let { comments, bill_id } = this.props
    let commentList;
    let commentsByBillId = [];

    if (comments[0] !== undefined){
      commentsByBillId = comments.filter(obj => obj.bill_id === bill_id);

      commentList = commentsByBillId.map(comment => (
        <li key={comment.id} className="comment-item">
          <div className="comment-header">
            <div className="comment-user">{comment.username}</div>
            <div className="comment-date">{comment.date}</div>
          </div>
          <div className="comment-body">{comment.body}</div>
        </li>
      ))
    }
    return(
      <div className="comment-list">
        <div className="comment-section-header">
          <i className="fa fa-comment" aria-hidden="true"></i>
          NOTES AND COMMENTS
        </div>

        <ul>
          {commentList}
        </ul>
      </div>
    )

  }
}
export default Comment;
