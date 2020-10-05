import React, { Component } from 'react';
import './product.style.scss';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="container">
				<div className="alert alert-success">
					Please add a brand new product [Duplicate Model Number Not Possible]
				</div>
				<form style={{ marginBottom: '100px' }}>
					<div className="col-md-8 m-auto">
						<div className="form-group">
							<label htmlFor="category">Product Category</label>
							<select name="category" id="category" className="form-control">
								<option selected value="tiles">
									Tiles
								</option>
								<option value="sanitary">Sanitary</option>
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
							/>
							<small className="form-text text-muted">
								EX: It may be height x width or height x width x radious
							</small>
						</div>
						<div className="form-group">
							<label htmlFor="baseUnit">Product Base Unit</label>
							<select name="baseUnit" id="baseUnit" className="form-control">
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
							/>
							<small className="form-text text-warning">EX: It must be unique</small>
						</div>
						<button type="submit" className="btn btn-primary mr-2">
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
