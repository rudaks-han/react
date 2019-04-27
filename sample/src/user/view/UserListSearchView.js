import React from 'react';
import { Button, Select, Input } from 'semantic-ui-react'

const options = [
	{ key: 'all', text: '전체', value: 'all' },
	{ key: 'customerId', text: '고객 아이디', value: 'customerId' },
	{ key: 'name', text: '이름', value: 'name' },
	{ key: 'email', text: '이메일', value: 'email' },
	{ key: 'tel', text: '전화번호', value: 'tel' },
]

const floatRightStyle = {"float":"right"};

const UserListSearchView = () => (
	<div>
		<Input type='text' placeholder='검색...' action>
			<input />
			<Select  options={options} defaultValue='all' />
			<Button type='submit'>검색</Button>
		</Input>
		<Button style={floatRightStyle}>등록</Button>
	</div>

);

export default UserListSearchView;