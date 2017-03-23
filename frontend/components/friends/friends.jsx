import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';
// import values from 'lodash/values';

class Friends extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: "", email: "", user_id: this.props.currentUser.id, modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchFriends();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, user_id } = this.state
    const friend = { name, email, user_id }
    this.props.createFriend(friend)
    this.closeModal()
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal(){
    this.setState({ modalOpen: false });
  }

  disableDefault(e){
    e.preventDefault();
  }

  render() {
    const { friends, deleteFriend } = this.props

    let friendsList;
    if (friends[0] !== undefined) {
      friendsList = friends.map(friend => (
        <a href="" className="friend" onClick={this.disableDefault}
            key={friend.id}><i className="fa fa-user" aria-hidden="true"></i>{friend.name}</a>
      ))
    }

    return(
      <div className="friends-container">
        <div className="friends-title">
          <a>FRIENDS</a>
          <a className="add-btn" onClick={this.openModal}><i className="fa fa-user-plus" aria-hidden="true"></i></a>
        </div>
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <label className="add-label"><i className="fa fa-user-plus" aria-hidden="true"></i>Add a friend</label>
          <br/>
          <form className="friend-form" onSubmit={this.handleSubmit}>
            <input type="text"
                   value={this.props.name}
                   placeholder="Friend's name"
                   onChange={this.update("name")}
                   className="friend-input" />
            <br/>
            <input type="email"
                   value={this.props.email}
                   placeholder="Friend's email (optional)"
                   onChange={this.update("email")}
                   className="friend-input" />
            <br />
            <input className="add" type="submit" value="Add friend" />
          </form>
        </Modal>
        <ul className="friends-list">{friendsList}</ul>
      </div>
    )
  }
}


export default Friends;
