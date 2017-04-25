import React from 'react';
import { Link, withRouter } from 'react-router';
// import Modal from 'react-modal';
// import ModalStyle from './modal_style';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", password: "", formType: 'login' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
		this.dropDown = this.dropDown.bind(this);
		this.clickEvent = this.clickEvent.bind(this);
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
		const user = {username: this.state.username, password: this.state.password};
		if (this.state.formType === 'login') {
			this.props.login(user);
		} else {
			this.props.signup(user);
		}
	}

	handleDemo(e) {
		e.preventDefault();
		this.props.loadDemo();
	}

	clickEvent(formType){
		this.setState({formType});
		this.dropDown();
	}

	dropDown(formType) {
		this.setState({formType});
    document.getElementById("myDropdown").classList.toggle("show");
		this.props.clearErrors();
  }
	renderErrors() {

		if(this.props.errors[0] !== undefined){
			return(
				<div className="render-errors">
					<ul>
						{this.props.errors.map((error, i) => (
							<li key={`error-${i}`}>
								{error}
							</li>
						))}
					</ul>
				</div>
			)
		} else {}
	}

	formButton(){
		if (this.state.formType === 'login'){
			return 'Log in to TripSplit';
		} else {
			return 'Sign up for TripSplit';
		}
	}

	render() {

		return (
			<div>
				<nav className="login-signup-links">
					<div className="dropdown">
		        <button onClick={this.dropDown.bind(this,'login')}
										className="dropbtn"
										id="dropbtn-mint">Log in</button>
						&nbsp; or &nbsp;
						<button onClick={this.dropDown.bind(this,'signup')}
										className="dropbtn"
										id="dropbtn-orange">Sign up</button>
		          <div id="myDropdown" className="dropdown-content">
								<form className="login-form">
										{this.renderErrors()}
									<div className="login-contents">
										<input type="text"
													 value={this.state.username}
													 onChange={this.update("username")}
													 placeholder=" Username"
													 className="login-input" />
										<input type="password"
													 value={this.state.password}
													 onChange={this.update("password")}
													 placeholder=" Password"
													 className="login-input" />
										<button className="click-btn"
														id="submit-btn"
														onClick={this.handleSubmit}>{this.formButton()}</button>
										<button className="click-btn"
														id="demo-btn"
														onClick={this.handleDemo}>Demo</button>
									</div>
								</form>
		          </div>
		      </div>
				</nav>
			</div>
		);
	}

}

export default withRouter(SessionForm);

window.onClick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
	this.props.clearErrors();
}
