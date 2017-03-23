import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class AddBill extends React.Component {
  constructor(props){
    super(props);
    this.state = { description: "", cost: 0, user_id: this.props.currentUser.id, friend_id: null, modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let { description, cost, user_id, friend_id } = this.state;
    let bill = {description, cost, user_id, friend_id}
    this.props.createBill(bill)
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


  render() {
    const { friends } = this.props
    let friendsList;
    if (friends[0] !== undefined) {
      friendsList = friends.map(friend => (
        <option key={friend.id} value={friend.id}>{friend.name}</option>
      ))
    }

    return (
      <div>
        <div>
          <button className="dashbtn" id="dashbtn-orange"
            onClick={this.openModal}>Add a bill</button>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <label className="bill-label">
            Add a bill</label>
          <br/>

          <form className="bill-form" onSubmit={this.handleSubmit}>
            <select className="bill-input" onChange={this.update("friend_id")}>
              <option disabled value="" >Add a friend</option>
              {friendsList}
            </select>
            <br/>
            <input type="text"
                   value={this.props.description}
                   placeholder="Description"
                   onChange={this.update("description")}
                   className="bill-input" />
            <br/>
            <div className="bill-input" >
              <span className="dollar-sign">$</span>
              <input type="number"
                     value={this.props.cost}
                     placeholder="0.00"
                     onChange={this.update("cost")}
                     min = "0.01"
                     step = "0.01"
                     className="cost-input" />
            </div>
            <br/>
              <input type="date"
                     value={this.props.date}
                     onChange={this.update("date")}
                     className="bill-input" />
            <br/>
            <div>Paid by you and split equally</div>
            <br/>
            <input className="add" type="submit" value="Add bill" />
          </form>
        </Modal>
      </div>
    )

  }
}

export default AddBill;
