import React from 'react';
import UserListSearchView from './UserListSearchView';
import UserListTableView from './UserListTableView';

const UserListView = () => (
	<div className="list-view">
		<UserListSearchView/>
		<UserListTableView/>
	</div>
);

export default UserListView;