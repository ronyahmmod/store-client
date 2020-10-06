import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="list-group mb-5">
				<NavLink exact className="list-group-item list-group-item-action" activeClassName="active" to="/">
					Home
				</NavLink>
				<NavLink
					exact
					className="list-group-item list-group-item-action"
					activeClassName="active"
					to="/addNewProduct"
				>
					Add New Product
				</NavLink>
				<NavLink
					exact
					className="list-group-item list-group-item-action"
					activeClassName="active"
					to="/allProducts"
				>
					Show All Products
				</NavLink>
				<NavLink
					exact
					className="list-group-item list-group-item-action"
					activeClassName="active"
					to="/updateStock"
				>
					Update Stock Manually
				</NavLink>
				<NavLink
					activeClassName="active"
					exact
					className="list-group-item list-group-item-action list-group-item-danger"
					to="/removeProduct"
				>
					Remove Product
				</NavLink>
			</div>
		);
	}
}

export default Sidebar;
