import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.page';
import Sidebar from './components/sidebar/sidebar.component';
import Product from './components/product/product.component';
import ProudctList from './components/product-list/product-list.component';
import './App.scss';

function App() {
	return (
		<div className="App" style={{ marginTop: '80px' }}>
			<Header />
			<div className="container-fludi px-2">
				<Header />
				<div className="alert alert-danger">
					Before edit or update any information please ensure otherwise it will effect on your store.
				</div>
				<div className="row">
					<div className="col-sm-6 col-md-3">
						<Sidebar />
					</div>
					<div className="col-sm-6 col-md-9">
						<Switch>
							<Route exact path="/" component={HomePage} />
							<Route exact path="/addNewProduct" component={Product} />
							<Route exact path="/allProducts" component={ProudctList} />
							<Route exact path="/updateStock" />
							<Route exact path="/removeProduct" />
							{/* <Redirect to="/allProducts" /> */}
							<Redirect to="/" />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
