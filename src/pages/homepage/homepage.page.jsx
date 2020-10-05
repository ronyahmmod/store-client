import React, { Component } from 'react';

class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="jumbotron">
				<div className="container">
					<h4 className="display-4">Lot of works is pending</h4>
				</div>
			</div>
		);
	}
}

export default HomePage;
