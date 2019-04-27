import React from 'react';
import CustomerListSearchView from './CustomerListSearchView';
import CustomerListTableView from './CustomerListTableView';

const CustomerListView = () => (
	<div className="list-view">
		<CustomerListSearchView/>
		<CustomerListTableView/>
	</div>
);

export default CustomerListView;