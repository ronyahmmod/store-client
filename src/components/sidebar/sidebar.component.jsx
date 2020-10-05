import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="list-group mb-5">
				<Link className="list-group-item list-group-item-action" to="/home">
					Home
				</Link>
				<Link className="list-group-item list-group-item-action" to="/addNewProduct">
					Add New Product
				</Link>
				<Link className="list-group-item list-group-item-action" to="/allProducts">
					Show All Products
				</Link>
				<Link className="list-group-item list-group-item-action" to="/updateStock">
					Update Stock Manually
				</Link>
				<Link className="list-group-item list-group-item-action list-group-item-danger" to="/removeProduct">
					Remove Product
				</Link>
			</div>
		);
	}
}

export default Sidebar;
