import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './modal_style';

class SettleBill extends React.Component {
  constructor(props){
    super(props);

    this.state = { description: "", cost: 0, user_id: this.props.currentUser.id, bill_id: null, modalOpen: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateAll = this.updateAll.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let { description, cost, user_id, bill_id } = this.state;
    let bill = {description, cost, user_id, bill_id}
    this.props.udpateBill(bill)
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

  updateAll(bill_id){
    debugger;
    let { bills } = this.props;

  }
  render() {
    const { bills } = this.props
    let billsList;
    if (bills[0] !== undefined) {
      billsList = bills.map(bill => (
        <option key={bill.id} value={bill.id}>{bill.description}-{bill.date}</option>
      ))
    }
    return (
      <div>
        <div>
          <button className="dashbtn" id="dashbtn-mint"
            onClick={this.openModal}>Settle Up</button>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          <label className="bill-label">
            Settle a bill</label>
          <br/>

          <form className="bill-form" onSubmit={this.handleSubmit}>
            <select className="bill-input" onSelect={this.updateAll("bill_id")}>
              <option disabled value="" >Select a bill</option>
              {billsList}
            </select>
            <input type="text"
                   value={this.state.description}
                   placeholder="Description"
                   onChange={this.update("description")}
                   className="bill-input" />
            <br/>
            <div className="bill-input" >
              <span className="dollar-sign">$</span>
              <input type="number"
                     value={this.state.cost}
                     placeholder="0.00"
                     onChange={this.update("cost")}
                     min = "0.01"
                     step = "0.01"
                     className="cost-input" />
            </div>
            <br/>
              <input type="date"
                     value={this.state.date}
                     onChange={this.update("date")}
                     className="bill-input" />
            <br/>
            <div>Paid by you and split equally</div>
            <br/>
            <input className="settle" type="submit" value="Settle bill" />
          </form>
        </Modal>
      </div>
    )
  }
}

export default SettleBill;
