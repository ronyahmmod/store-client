import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '-1',
			password: '-1'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const sendPostRequest = async () => {
			try {
				const res = await axios({
					url: 'http://localhost:2020/api/v1/users/signin',
					method: 'POST',
					data: {
						email: this.state.email,
						password: this.state.password
					}
				});
				if (res.data.status === 'success') {
					console.log(res.data);
				}
			} catch (err) {
				console.log(err.response.data.message);
			}
		};
		sendPostRequest();
	}

	render() {
		return (
			<div className="container">
				<form method="post" action="http://localhost:2020/api/v1/users/signin">
					<div className="col-sm-8 col-md-6 m-auto">
						<h3 className="display-3 text-center">SIGN IN</h3>
						{this.state.email ? '' : <div className="alert alert-danger">Enter Email</div>}
						<div className="form-group">
							<label htmlFor="email">Email Address</label>
							<input
								type="email"
								className="form-control"
								id="email"
								name="email"
								onChange={this.handleChange}
								placeholder="Enter email"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Email Password</label>
							<input
								type="password"
								className="form-control"
								id="password"
								name="password"
								onChange={this.handleChange}
								placeholder="Enter password"
								required
							/>
						</div>
						<button type="submit" name="submit" className="btn btn-primary" onClick={this.handleSubmit}>
							Sign In
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Login;
