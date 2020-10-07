import React, { Component } from 'react';
import validator from 'validator';
import axios from 'axios';
import './product.style.scss';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			category: '',
			description: '',
			pricePerUnit: 0,
			color: '',
			categories: [],

			size: [],
			company: '',
			origin: '',
			type: '',
			model: '',
			remark: '',
			error: []
		};
		this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	validateFormData() {
		console.log(this.state);
		const error = [];
		if (!this.state.categorie) {
			console.log('Empty category');
			error.push({ fieldName: 'category', message: 'You must provide category' });
			this.setState(
				(st) => ({ ...st, error: error }),
				() => {
					console.log('Complete');
				}
			);
		} else if (!this.state.name) {
			error.push({ fieldName: 'name', message: 'You must provide product name' });
			this.setState((st) => ({ ...st, error: error }));
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		this.validateFormData();
	}

	componentDidMount() {
		// 1) load category from the database
		let categories;
		const loadCategory = async () => {
			try {
				const response = await axios.get('http://localhost:2020/api/v1/categories');
				if (response.data.status === 'success') {
					// console.log(response.data.data.allCategory);

					categories = response.data.data.allCategory;
					this.setState({ categories: categories });
				}
			} catch (err) {
				console.log(err.response.data.message);
			}
		};
		loadCategory();
	}

	render() {
		const categories = this.state.categories.map((categorie) => (
			<option key={categorie._id} value={categorie.name}>
				{categorie.name}
			</option>
		));

		return (
			<div className="container">
				{/* {this.state.error ? (
					<div className="alert alert-danger">{this.state.error}</div>
				) : (
					<div className="alert alert-success">
						Please add a brand new product [Duplicate Model Number Not Possible]
					</div>
				)} */}

				<form style={{ marginBottom: '100px' }}>
					<div className="col-md-8 m-auto">
						<div className="form-group">
							<label htmlFor="category">Product Category</label>
							<select
								name="category"
								id="category"
								className="form-control"
								onChange={this.handleChange}
								value={this.state.category}
							>
								<option value="" selected>
									Select
								</option>
								{categories}
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="name">Product Name</label>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Enter product name"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="description">Product Description</label>
							<textarea
								className="form-control"
								placeholder="Enter product description"
								name="description"
								id="description"
								rows={4}
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="pricePerUnit">Price per unit</label>
							<input
								type="number"
								name="pricePerUnit"
								id="pricePerUnit"
								placeholder="Enter price per unit"
								className="form-control"
								onChange={this.handleChange}
							/>
							<small className="form-text text-muted">
								EX: 1PC 24X20 tile is 250TK. So field value will be 250{' '}
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="color">Product Color</label>
							<input
								type="text"
								name="color"
								id="color"
								placeholder="Enter product color"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="size">Product Size</label>
							<input
								type="text"
								name="size"
								id="size"
								placeholder="Enter product size"
								className="form-control"
								onChange={this.handleChange}
							/>
							<small className="form-text text-muted">
								EX: It may be height x width or height x width x radious
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="baseUnit">Product Base Unit</label>
							<select name="baseUnit" id="baseUnit" className="form-control" onChange={this.handleChange}>
								<option value="cm" selected>
									CM
								</option>
								<option value="ft">Feet</option>
								<option value="inch">Inch</option>
								<option value="kg">Kilo Gram</option>
								<option value="g">Gram</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="company">Product company</label>
							<input
								type="text"
								name="company"
								id="company"
								placeholder="Enter product company name"
								className="form-control"
								onChange={this.handleChange}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="type">Product type</label>
							<input
								type="text"
								name="type"
								id="type"
								placeholder="Enter product type"
								className="form-control"
								onChange={this.handleChange}
							/>
							<small className="form-text text-muted">
								EX: For tiles it will be wall/floor/many more
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="model">Product model</label>
							<input
								type="text"
								name="model"
								id="model"
								placeholder="Enter product model"
								className="form-control"
								onChange={this.handleChange}
							/>
							<small className="form-text text-warning">EX: It must be unique</small>
						</div>
						<div className="form-group">
							<label htmlFor="remark">Remark</label>
							<input
								type="text"
								name="remark"
								id="remark"
								placeholder="Enter product remark"
								className="form-control"
								onChange={this.handleChange}
							/>
							<small className="form-text text-warning">EX: It must be unique</small>
						</div>
						<button className="btn btn-primary mr-2" onClick={(event) => this.handleSubmit(event)}>
							Add Product
						</button>
						<button type="reset" className="btn btn-danger">
							Reset
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Product;
