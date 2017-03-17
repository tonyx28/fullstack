import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from './modal_style';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", modalOpen: false, modalType: 'login' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = this.state;
		console.log(user);
		if (this.state.modalType === 'login') {
			this.props.login(user);
		} else {
			this.props.signup(user);
		}
	}

	handleDemo(e) {
		e.preventDefault();
		this.props.loadDemo();
	}

	navLink() {
		if (this.state.modalType === "login") {
			return <button onClick={this.openModal.bind(this, 'signup')}>Sign up instead!</button>;
		} else {
			return <button onClick={this.openModal.bind(this, 'login')}>Login instead!</button>;
		}
	}

	openModal(modalType) {
		this.setState({
			modalOpen: true,
			modalType
		});
		this.props.clearErrors();
	}

	closeModal(){
		this.setState({modalOpen: false});
		this.props.clearErrors();
	}

	renderErrors() {

		return(
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		return (
			<div>
				<nav className="login-signup">
					<button onClick={this.openModal.bind(this, 'login')}>Log in</button>
					&nbsp; &nbsp;
					<button onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>
				</nav>
				<Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					style={ModalStyle}>
					Split!

					<br/>

					Please {this.state.modalType} or {this.navLink()}
					<form onSubmit={this.handleSubmit}>
						{this.renderErrors()}
						<div className="login-form">
							<br/>
							<label>Username:
								<input type="text"
										 	 value={this.state.username}
											 onChange={this.update("username")}
											 className="login-input" />
							</label>
							<br/>
							<label>Password:
								<input type="password"
											 value={this.state.password}
											 onChange={this.update("password")}
											 className="login-input" />
							</label>
							<br/>
							<input type="submit" value="Submit" />
							<br/>
							<button className="demo-btn" onClick={this.handleDemo}>Demo</button>
						</div>
					</form>
				</Modal>
			</div>
		);
	}
}

export default withRouter(SessionForm);
