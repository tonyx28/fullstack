import React from 'react';
import CommentContainer from './comment_container';

class Comment extends React.Component{
  constructor(props){
    super(props)
    this.state = { body: "",
                   username: this.props.currentUser.username,
                   date: new Date(),
                   bill_id: this.props.bill_id}
    this.handleSubmit =this.handleSubmit.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({ body: ""});
  }



  render(){
    const { comments, bill_id } = this.props
    let commentList;
    let commentsByBillId = [];

    if (comments[0] !== undefined)
      comments.forEach (comment => {
        if (comment.bill_id === bill_id){
          commentsByBillId.push(comment);
      }});
      commentList = commentsByBillId.map(comment => (
        <li key={comment.id} className="comment-item">
          <div className="comment-header">
            <div className="comment-user">{comment.username}</div>
            <div className="comment-date">{comment.date}</div>
          </div>
          <div className="comment-body">{comment.body}</div>
        </li>
      ))

    return(
      <div className="comment-list">
        <div className="comment-section-header">
          <i className="fa fa-comment" aria-hidden="true"></i>
          NOTES AND COMMENTS
        </div>

        <ul>
          {commentList}
        </ul>
        <textarea className="post-comment-body" placeholder="Add a comment..." onChange={this.update("body")} value={this.state.body}/>
        <button className="post-comment-btn" onClick={this.handleSubmit}>Post</button>
      </div>
    )

  }
}
export default Comment;
