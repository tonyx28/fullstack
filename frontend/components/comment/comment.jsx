import React from 'react';
import CommentContainer from './comment_container';

class Comment extends React.Component{
  constructor(props){
    super(props)

    this.handleSubmit =this.handleSubmit.bind(this);
  }


  handleSubmit(){

  }

  render(){
    const { comments, bill_id } = this.props
    const commentList = comments.map(comment => (
      <li key={comment.id} className="comment-item">
        <div className="comment-header">
          <div className="comment-user">{comment.username}</div>
          <div className="comment-date">{comment.date}</div>
        </div>
        <div className="comment-body">{comment.body}</div>
      </li>
    ))

    return{
      <div>
        <ul>
          {commentList}
        </ul>
        <textarea className="comment-body" placeholder="Add a comment..." />
        <button className="post-comment" onSubmit={this.handleSubmit}>Post</button>
      </div>
    }

  }
}
export default Comment;
